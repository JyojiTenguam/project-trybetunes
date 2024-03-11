import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';
import { AlbumType, SongType } from '../types';

type AlbumElement = {
  id: string;
};

function Album() {
  const { id } = useParams<AlbumElement>();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [musics, setMusics] = useState<SongType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (id) { // Verifica se id não é undefined ou null
      getMusics(id)
        .then(([albumData, ...musicsData]) => {
          setAlbum(albumData);
          setMusics(musicsData);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (isLoading || !album) {
    return <Loading />;
  }

  return (
    <div>
      <h1 data-testid="album-name">{album.collectionName}</h1>
      <h2 data-testid="artist-name">{album.artistName}</h2>
      <ul>
        {musics.map((music: SongType) => (
          <MusicCard
            key={ music.trackId }
            trackId={ music.trackId }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
          />
        ))}
      </ul>
    </div>
  );
}

export default Album;
