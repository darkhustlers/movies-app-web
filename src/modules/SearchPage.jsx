import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from './layouts/AppLayout';
import PosterCard from '../components/PosterCard';
import useSearch from '../hooks/useSearch';
import Loading from '../components/loading';
import PopcornDrinkIcon from '../icons/PopcornDrinkIcon';

function SearchResults({ query }) {
  const { results: data, error, loading } = useSearch(query);

  if (loading) {
    return (
      <div className="py-24">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center w-full">
        <h3 className="text-3xl text-white">Oops! Something went wrong.</h3>
      </div>
    );
  }

  return data.results?.length > 0 ? (
    <div className="grid gap-x-4 gap-y-6 sm:gap-y-10 lg:gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {data.results?.map((item) => (
        <PosterCard key={item.id} details={item} />
      ))}
    </div>
  ) : (
    <div className="py-8 w-full">
      <div className="max-w-sm mx-auto mb-4">
        <PopcornDrinkIcon />
      </div>
      <p className="text-2xl sm:text-3xl text-center text-gray-300">
        We can&apos;t find the movies you are searching for!
      </p>
    </div>
  );
}

export default function SearchPage({ query }) {
  return (
    <AppLayout>
      <section className="pt-20 pb-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white mb-4">Search Movies</h2>
          <em className="mb-4 block text-base text-white">
            <span className="text-primary">Note:</span>{' '}
            <span className="text-gray-300">For now you can only search for movies</span>
          </em>

          <SearchResults query={query} />
        </div>
      </section>
    </AppLayout>
  );
}

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
};
