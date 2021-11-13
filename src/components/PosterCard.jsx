import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BASE_POSTER_PATH } from '../constants/paths';

export default function PosterCard({ details }) {
  const backdropImage = details.poster_path
    ? `${BASE_POSTER_PATH}/${details.poster_path}`
    : '/images/banner-mobile.jpg';

  const releaseYear = details.release_date
    ? format(new Date(Date.parse(details?.release_date || details?.first_air_date)), 'yyyy')
    : '';

  return (
    <Link
      className="block sm:w-60 bg-lightgray flex space-x-1 sm:space-x-0 sm:flex-col overflow-hidden rounded-md shadow-md group"
      to={`/movies/${details.id}`}
    >
      <span className="sm:hidden poster__card-img">
        <LazyLoadImage
          src={backdropImage}
          alt={details.original_title}
          effect="blur"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
        />
      </span>
      {/* sm screen */}
      <span className="hidden sm:block overflow-hidden sm:aspect-w-8 sm:aspect-h-8 transform transition-transform group-hover:scale-105 ease-in-out">
        <LazyLoadImage
          src={backdropImage}
          alt={details.original_title}
          effect="blur"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
        />
      </span>
      <span className="w-full h-full block p-2 bg-customgray-300">
        <span className="block leading-tight text-lg line-clamp-1 mb-2 sm:mb-1">
          {details.original_title}
        </span>
        {/* vote average */}
        {details.vote_average ? (
          <span className="flex items-center block leading-tight text-sm mb-2 sm:mb-1 space-x-1">
            <span className="text-gray-200">Average:</span>
            <span className="text-primary">{details.vote_average}</span>
          </span>
        ) : null}
        {/* release year */}
        <span className="block leading-tight text-sm text-primary mb-2 sm:mb-0">{releaseYear}</span>
        {/* overview */}
        {details.overview ? (
          <span className="line-clamp-3 sm:!hidden">{details?.overview}</span>
        ) : null}
      </span>
    </Link>
  );
}

PosterCard.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
};
