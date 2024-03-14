import { useState, useEffect } from 'react';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import checked_heart from '../images/checked_heart.png';
import empty_heart from '../images/empty_heart.png';

export interface SongType {
  trackId: number;
  trackName: string;
  previewUrl: string;
  onRemove?: () => void;
}

function MusicCard({ trackId, trackName, previewUrl, onRemove = () => {} }: SongType) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeSong({ trackId, trackName, previewUrl });
      if (onRemove) {
        onRemove();
      }
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
          className="heart-img"
          src={ isFavorited ? checked_heart : empty_heart }
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
