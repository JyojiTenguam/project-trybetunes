import { useState } from 'react';
import { SongType } from '../types';

function MusicCard({ trackId, trackName, previewUrl }: SongType) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(!isFavorited);
  };

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
