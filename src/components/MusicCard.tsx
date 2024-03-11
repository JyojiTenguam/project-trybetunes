import { useState, useEffect } from 'react';
import { SongType } from '../types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

function MusicCard({ trackId, trackName, previewUrl }: SongType) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeSong({ trackId, trackName, previewUrl });
    } else {
      addSong({ trackId, trackName, previewUrl });
    }
    setFavorited(!isFavorited);
  };

  useEffect(() => {
    const fetchFavoriteSongs = async () => {
      const favoriteSongs = await getFavoriteSongs();
      const isSongFavorited = favoriteSongs.some((song) => song.trackId === trackId);
      setFavorited(isSongFavorited);
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
          <code>
            audio
          </code>
        </audio>
      </label>
    </div>
  );
}

export default MusicCard;
