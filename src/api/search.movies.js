import axios from 'axios';

const API_KEY = 'b422b72395b3e9533bb19f65b9dae17c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  return await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const searchMovies = async query => {
  return await axios.get(`/search/movie`, {
    params: {
      query,
      api_key: API_KEY,
    },
  });
};

export const fetchMovieById = async id => {
  return await axios.get(`/movie/${id}?api_key=${API_KEY}`);
};
