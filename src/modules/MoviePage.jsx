import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppLayout from './layouts/AppLayout';
import Details from '../components/details';
import RecommendationEntities from '../components/RecommendationEntities';

export default function MoviePage({ movie, recommendations, credits }) {
  useEffect(() => {
    document.title = `${movie.original_title} | Moviez Ninja`;
  }, [movie]);

  return (
    <AppLayout>
      <Details details={movie} credits={credits} />
      {recommendations.length > 5 ? (
        <RecommendationEntities recommendations={recommendations} category="movies" />
      ) : null}
    </AppLayout>
  );
}

MoviePage.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
  recommendations: PropTypes.instanceOf(Array).isRequired,
  credits: PropTypes.instanceOf(Object).isRequired,
};
