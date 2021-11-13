import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BASE_POSTER_PATH } from '../../constants/paths';

export default function Card({ details, category = 'movies' }) {
  const base = category === 'movies' ? '/movies' : '/tv';
  const backdropImage = details.backdrop_path
    ? `${BASE_POSTER_PATH}/${details.backdrop_path}`
    : '/images/banner-tablet.jpg';

  return (
    <Link
      to={`${base}/${details.id}`}
      className="block card relative h-full rounded shadow overflow-hidden group transform transition-transform focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-primary"
    >
      <LazyLoadImage
        src={backdropImage}
        alt={details.name || details.original_title}
        width="100%"
        height="100%"
        className="w-full h-full object-cover"
        effect="blur"
      />
      <div className="w-full h-full absolute top-1/2 left-0 p-2 z-10 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all">
        <h4 className="text-xl md:text-2xl text-white line-clamp-1 leading-tight md:mb-1">
          {details.name || details.original_title}
        </h4>
        {details.overview ? (
          <p className="text-sm text-gray-300 line-clamp-2">{details.overview}</p>
        ) : null}
      </div>
    </Link>
  );
}

Card.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  category: PropTypes.string.isRequired,
};
