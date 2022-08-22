import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_DETAIL_URL = 'https://api.themoviedb.org/3/movie';

const KEY = '4cd68e7e48cde1cabd477e22c5e05053';

export const getTrending = async page => {
  const response = await axios.get(`${BASE_URL}?api_key=${KEY}&page=${page}`);
  return response.data;
};

export const fetchFilm = async (query, page) => {
  const response = await axios.get(
    `${SEARCH_URL}?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&`
  );
  return response.data;
};

export const fetchActors = async id => {
  const response = await axios.get(
    `${BASE_DETAIL_URL}/${id}/credits?api_key=${KEY}&language=en-US&`
  );
  return response.data.cast;
};

export const fetshReviews = async id => {
  const response = await axios.get(
    `${BASE_DETAIL_URL}/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
