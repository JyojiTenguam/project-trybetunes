import { useState, useEffect } from 'react';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import { SongType } from '../types';

interface MusicCardProps extends SongType {
  updateFavoriteSongs: () => Promise<void>;
  onRemove: (trackId: number) => Promise<void>;
}

function MusicCard({ trackId, trackName, previewUrl, updateFavoriteSongs, onRemove }
: MusicCardProps) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeSong({ trackId, trackName, previewUrl }).then(() => {
        setFavorited(false);
        updateFavoriteSongs();
      });
    } else {
      addSong({ trackId, trackName, previewUrl }).then(() => {
        setFavorited(true);
        updateFavoriteSongs();
      });
    }
  };

  useEffect(() => {
    const fetchFavoriteSongs = async () => {
      try {
        const favoriteSongs = await getFavoriteSongs();
        const isSongFavorited = favoriteSongs.some((song) => song.trackId === trackId);
        setFavorited(isSongFavorited);
      } catch (error) {
        console.error('Error fetching favorite songs:', error);
      }
    };

    fetchFavoriteSongs();
  }, [trackId]);

  return (
    <div>
      <label data-testid={ `checkbox-music-${trackId}` }>
        {`${trackName}`}
        <input
          type="checkbox"
          checked={ isFavorited }
          onChange={ toggleFavorite }
        />
        <img
          src={ isFavorited
            ? '/src/images/checked_heart.png'
            : '/src/images/empty_heart.png' }
          alt="favorite"
        />
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </label>
      <button onClick={ () => onRemove(trackId) }>
        Remover música
      </button>
    </div>
  );
}

export default MusicCard;
