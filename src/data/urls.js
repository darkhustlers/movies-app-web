import { API_KEY } from '../constants/paths';

export const moviesUrls = [
  {
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    category: 'Popular',
  },
  {
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    category: 'Trending',
  },
];

export const tvShowsUrls = [
  {
    url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    category: 'Trending',
  },
  {
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
    category: 'Popular',
  },
];
