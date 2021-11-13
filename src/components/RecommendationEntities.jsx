import React from 'react';
import PropTypes from 'prop-types';
import CardEntities from './CardEntities';
import Card from './card';

export default function RecommendationEntities({ recommendations, category }) {
  return (
    <section className="pt-16 pb-40">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-primary mb-4">More like this</h3>

        <CardEntities>
          {recommendations.map((item) => (
            <Card key={item.id} details={item} category={category} />
          ))}
        </CardEntities>
      </div>
    </section>
  );
}

RecommendationEntities.propTypes = {
  recommendations: PropTypes.instanceOf(Array).isRequired,
  category: PropTypes.string.isRequired,
};
