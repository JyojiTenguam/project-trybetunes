import React, { useState, useEffect } from 'react';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from './MusicCard';
import { SongType } from '../types';
import Loading from './Loading';

function Favorites() {
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavoriteSongs = async () => {
    const songs = await getFavoriteSongs();
    setFavoriteSongs(songs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFavoriteSongs();
  }, []);

  const handleRemoveSong = async (trackId: number) => {
    const songToRemove = favoriteSongs.find((song) => song.trackId === trackId);

    if (songToRemove) {
      await removeSong(songToRemove);
      fetchFavoriteSongs();
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        favoriteSongs.map((song) => (
          <MusicCard
            key={ song.trackId }
            { ...song }
            updateFavoriteSongs={ fetchFavoriteSongs }
            onRemove={ handleRemoveSong }
          />
        ))
      )}
    </div>
  );
}

export default Favorites;
