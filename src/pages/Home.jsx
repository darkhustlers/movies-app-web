import React, { useEffect } from 'react';
import HomePage from '../modules/HomePage';
import { moviesUrls, tvShowsUrls } from '../data/urls';
import useContent from '../hooks/useContent';
import sectionFilter from '../utils/sectionFilter';

export default function Home() {
  const { movies } = useContent(moviesUrls, 'movies');
  const { tvShows } = useContent(tvShowsUrls, 'tvShows');
  const slides = sectionFilter({ movies, tvShows });

  useEffect(() => {
    document.title = 'Moviez Ninja';
  }, []);

  return <HomePage slides={slides} />;
}
