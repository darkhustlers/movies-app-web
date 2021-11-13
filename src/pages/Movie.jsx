import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import useDetails from '../hooks/useDetails';
import MoviePage from '../modules/MoviePage';
import Loading from '../components/loading';
import detailsFilter from '../utils/detailsFilter';

export default function Movie() {
  const { id } = useParams();
  const { content, loading, notFound } = useDetails(id, 'movies');

  const { details, recommendations, credits } = detailsFilter(content);

  if (notFound) {
    return <Redirect to="/*" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <MoviePage
      movie={details.data[0]}
      recommendations={recommendations.data[0]?.results}
      credits={credits.data[0]}
    />
  );
}
