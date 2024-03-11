import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';
import Loading from './Loading';

function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [searchArtist, setSearchArtist] = useState<string>('');

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setAlbums([]);
    try {
      const result = await searchAlbumsAPI(search);
      setAlbums(result);
      setSearchArtist(search); // Definir o artista pesquisado
    } catch (error) {
      console.error('Erro ao pesquisar álbuns:', error);
      setAlbums([]);
    } finally {
      setLoading(false);
      setSearch(''); // Limpar o campo de pesquisa
    }
  };

  return (
    <div>
      <form onSubmit={ handleSearch }>
        <input
          data-testid="search-artist-input"
          type="text"
          value={ search }
          onChange={ (event) => setSearch(event.target.value) }
        />
        <button
          data-testid="search-artist-button"
          type="submit" // Mudar para type="submit"
          disabled={ search.length < 2 || isLoading }
        >
          Pesquisar
        </button>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {albums.length !== 0 ? (
            <h1>
              Resultado de álbuns de:
              {' '}
              {searchArtist}
            </h1>
          ) : (
            <h1>Nenhum álbum foi encontrado</h1>
          )}

          <div className="albums-list">
            {albums.map((album) => (
              <div key={ album.collectionId }>
                <img
                  src={ album.artworkUrl100 }
                  alt={ `${album.artistName} - ${album.collectionName}` }
                />
                <Link
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ `/album/${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
