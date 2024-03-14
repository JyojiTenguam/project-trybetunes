import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
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
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavoriteSongs = async () => {
    await getFavoriteSongs();
    setIsLoading(false);
  };

  const handleRemoveSong = async (trackId: number) => {
    const songToRemove = musics.find((song) => song.trackId === trackId);

    if (songToRemove) {
      await removeSong(songToRemove);
      fetchFavoriteSongs();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const [albumData, ...musicsData] = await getMusics(id);
          setAlbum(albumData);
          setMusics(musicsData);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading || !album ? (
        <Loading />
      ) : (
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
                updateFavoriteSongs={ fetchFavoriteSongs }
                onRemove={ handleRemoveSong }
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Album;
