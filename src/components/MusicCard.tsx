import { SongType } from '../types';

function MusicCard({ trackName, previewUrl }: SongType) {
  return (
    <div>
      <label>
        {`${trackName}`}
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
