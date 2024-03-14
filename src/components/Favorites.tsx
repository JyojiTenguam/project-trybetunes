import React, { useState, useEffect } from 'react';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard, { SongType } from './MusicCard';
import Loading from './Loading';

interface MusicCardProps extends SongType {
  onRemove: () => void;
}

function Favorites() {
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songs = await getFavoriteSongs();
        setFavoriteSongs(songs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching favorite songs:', error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  const handleRemoveFavorite = (song: SongType) => {
    try {
      removeSong(song);
      setFavoriteSongs((prevSongs) => prevSongs
        .filter((prevSong) => prevSong.trackId !== song.trackId));
    } catch (error) {
      console.error('Error removing favorite song:', error);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    } if (favoriteSongs.length > 0) {
      return favoriteSongs.map((song: SongType) => {
        const musicCardProps: MusicCardProps = {
          ...song,
          onRemove: () => handleRemoveFavorite(song),
        };

        return <MusicCard key={ song.trackId } { ...musicCardProps } />;
      });
    }
    return <h3>Não há músicas favoritas.</h3>;
  };

  return (
    <div>
      { renderContent() }
    </div>
  );
}

export default Favorites;
