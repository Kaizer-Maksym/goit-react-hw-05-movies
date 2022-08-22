import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
// ---API request
import { fetchFilm } from '../services/api';
// ---Components
import SearchBar from '../components/SearchBar/SearchBar';
import SearchGallery from 'components/SearchGallery/SearchGallery';
import ScrollTop from 'components/ScrollTop/ScrollTop';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      fetchFilm(query).then(resp => {
        setSearchMovie(resp);
      });
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const submitHadle = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  return (
    <>
      <SearchBar onSubmit={submitHadle} />
      <SearchGallery searchMovie={searchMovie} state={{ from: location }} />
      <ScrollTop query={searchMovie} />

      <Outlet />
    </>
  );
};

export default Movies;
