import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppLayout from './layouts/AppLayout';
import Details from '../components/details';
import RecommendationEntities from '../components/RecommendationEntities';

export default function TVPage({ tv, recommendations, credits }) {
  useEffect(() => {
    document.title = `${tv.name} | Moviez Ninja`;
  }, [tv]);

  return (
    <AppLayout>
      <Details details={tv} credits={credits} />
      {recommendations.length > 5 ? (
        <RecommendationEntities recommendations={recommendations} category="tv" />
      ) : null}
    </AppLayout>
  );
}

TVPage.propTypes = {
  tv: PropTypes.instanceOf(Object).isRequired,
  recommendations: PropTypes.instanceOf(Array).isRequired,
  credits: PropTypes.instanceOf(Object).isRequired,
};
