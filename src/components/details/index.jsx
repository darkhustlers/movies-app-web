import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BASE_POSTER_PATH, BASE_IMDB_URL } from '../../constants/paths';
import convertToHoursMinutes from '../../utils/functions';
import ExternalLinkIcon from '../../icons/ExternalLinkIcon';

export default function Details({ details, credits }) {
  const backdropImage = details.backdrop_path
    ? `${BASE_POSTER_PATH}/${details.backdrop_path}`
    : '/images/banner-desktop.jpg';
  const posterImage = details.poster_path
    ? `${BASE_POSTER_PATH}/${details.poster_path}`
    : '/images/banner-mobile.jpg';

  const director =
    credits?.crew.length > 0 && credits.crew.filter((item) => item.job === 'Director');

  const releaseYear = format(
    new Date(Date.parse(details.release_date || details.first_air_date)),
    'yyyy',
  );

  return (
    <section>
      <div
        className="w-full bg-no-repeat bg-cover bg-black"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--black-500) 7%, var(--black-600) 18%, var(--lightgray)), url(${backdropImage})`,
        }}
      >
        <div className="container mx-auto px-4 pt-32 z-10 h-full">
          <div className="flex flex-wrap sm:space-x-4 lg:space-x-8">
            <div className="details__card-img w-32 h-48 md:w-48 md:h-72 xl:w-60 xl:h-80 mb-4 mr-4 sm:mr-0">
              <LazyLoadImage
                src={posterImage || backdropImage}
                alt={details.name || details.original_title}
                effect="blur"
                className="w-full h-full"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-white text-3xl lg:text-4xl leading-tight mb-1 md:mb-3">
                {details.name || details.original_title}
              </h2>
              {/* language & year */}
              <div className="mb-2">
                <p className="text-base md:text-lg text-gray-100">
                  <span className="uppercase pr-2">{details.original_language}</span>
                  &middot;
                  <span className="pl-2">{releaseYear}</span>
                </p>
              </div>
              {/* genres */}
              {details?.genres ? (
                <div className="flex flex-wrap lg:items-center lg:space-x-1 mb-2 md:mb-3">
                  {details.genres.map((genre, index) => (
                    <p
                      key={genre.id}
                      className={`text-sm sm:text-base text-coolgray-300 ${
                        index < details.genres.length - 1 ? 'mr-1' : ''
                      }`}
                    >
                      {`${genre.name}${index < details.genres.length - 1 ? ', ' : ''}`}
                    </p>
                  ))}
                </div>
              ) : null}
              {/* tagline */}
              {details?.tagline ? (
                <div className="mb-1 md:mb-3 text-base text-gray-100">
                  <p>{details.tagline}</p>
                </div>
              ) : null}
              {/* mobile rating & runtime */}
              <div className="md:hidden">
                {details.vote_average ? (
                  <p className="text-base text-gray-200">
                    <span className="mr-2">Avearge:</span>
                    <span className="text-primary">{`${details.vote_average} / 10`}</span>
                  </p>
                ) : null}
                {details?.runtime ? (
                  <p className="text-base text-gray-200">
                    <span className="mr-2">Runtime:</span>
                    <span className="text-primary">{convertToHoursMinutes(details.runtime)}</span>
                  </p>
                ) : null}
              </div>
              {/* desktop rating & runtime */}
              <ul className="hidden md:flex items-center divide-x divide-gray-300 mb-1 md:mb-3">
                {details.vote_average ? (
                  <li className="pr-4 flex flex-col text-center text-base">
                    <span className="text-primary sm:text-lg lg:text-xl">
                      <span>{`${details.vote_average} / 10`}</span>
                    </span>
                    <span className="text-white">Avearge</span>
                  </li>
                ) : null}
                {details?.runtime ? (
                  <li className="px-4 flex flex-col text-center text-base">
                    <span className="text-primary sm:text-lg lg:text-xl">
                      {convertToHoursMinutes(details.runtime)}
                    </span>
                    <span className="text-white">Runtime</span>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
          <div className="max-w-3xl mb-20">
            {/* overview */}
            {details?.overview ? (
              <div className="mb-6">
                <h3 className="text-2xl text-primary font-semibold mb-2">Storyline</h3>
                <p className="text-base sm:text-lg text-gray-200 leading-tight">
                  {details.overview}
                </p>
              </div>
            ) : null}
            {/* director */}
            {director?.[0] ? (
              <div className="mb-6">
                <p>
                  <span className="text-xl text-primary font-semibold mr-2">Director:</span>
                  <span className="text-base sm:text-lg text-gray-200 ">
                    {director[0].original_name}
                  </span>
                </p>
              </div>
            ) : null}
            <div className="flex flex-col sm:flex-row sm:items-center justify-start sm:space-x-4">
              {/* imdb link */}
              {details?.imdb_id ? (
                <div className="mb-3 sm:mb-0">
                  <a
                    href={`${BASE_IMDB_URL}/${details.imdb_id}`}
                    className="inline-flex items-center text-lg py-1 px-4 text-white border border-white cursor-pointer rounded group hover:text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-primary"
                    title="IMDb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDb
                    <span className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ExternalLinkIcon />
                    </span>
                  </a>
                </div>
              ) : null}
              {/* homepage */}
              {details?.homepage ? (
                <div className="">
                  <a
                    href={details.homepage}
                    className="inline-flex items-center text-lg py-1 px-4 bg-primary border-primary border text-black rounded group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-primary"
                    title="Homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Homepage
                    <span className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ExternalLinkIcon />
                    </span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Details.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
  credits: PropTypes.instanceOf(Object).isRequired,
};
