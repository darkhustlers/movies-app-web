import React from 'react';
import AppLayout from './layouts/AppLayout';

export default function AboutPage() {
  return (
    <AppLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-white mb-4">About Us</h2>
          <p className="text-2xl text-white mb-4">
            Are you looking for a useful movie tracker app to assist you with your movie discovery
            process?
          </p>
          <p className="text-lg text-gray-300 mb-3">
            MoviezNinja has got it covered. From searching through categorized movies, to exploring
            anticipated, top rated and box office material, we will help you with the most relevant
            and up-to-date content.
          </p>
          <p className="text-lg text-gray-300 mb-3">
            Movie critics have become obsolete. No longer do you have to rely on someone else@apos;s
            opinion in order to figure out whether or not the latest film is worth your time when
            you can read what other moviegoers themselves are saying.
          </p>
          <p className="text-lg text-gray-300 mb-3">
            With MovizNinja, you can easily search for any movie genre, be it drama, horror,
            documentary etc.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            The MoviezNinja app will help you find everything you need. MoviezNinja lets you find
            movies, watch trailers, read reviews, and gives the option to search for actors. So
            whether you&apos;re movie hunting or want to relive your favorite movie moments- this
            app is for you.
          </p>
          <h4 className="text-2xl text-white mb-4">
            Learn about the world of film from a MoviezNinja app
          </h4>
          <ul className="list-disc ml-5 text-lg max-w-3xl text-gray-300 mb-6">
            <li className="mb-1">
              With the intelligent search function, you can find the movie you are looking for in
              the easiest possible way. You can also check genre, director, actors, cast, etc.
            </li>
            <li className="mb-1">
              Explore huge amount of categories: Trending movie reviews, Anticipated movie trailers,
              Top Rated movie recommendation and Box Office movie guide Use MoviezNinja To Create
              your own Party.
            </li>
          </ul>
          <h4 className="text-2xl text-white mb-4">Use MoviezNinja To Create your own Party</h4>
          <ul className="list-disc ml-5 text-lg max-w-3xl text-gray-300 mb-6">
            <li className="mb-1">
              Search your films, series and actors in the huge community database.
            </li>
            <li className="mb-1">
              Get personal movie recommendation based on your taste Check movie trailers and
              ratings.
            </li>
          </ul>
          <h4 className="text-2xl text-white mb-4">Check movie trailers and ratings</h4>
          <ul className="list-disc ml-5 text-lg max-w-3xl text-gray-300 mb-6">
            <li className="mb-1">Share your favorites in a collection within movie guide.</li>
            <li className="mb-1">Get the upcoming movies suggestions.</li>
            <li className="mb-1">
              Read movie ratings, movie reviews and see film details Movie Trailers and More Content
              that you need.
            </li>
          </ul>
          <h4 className="text-2xl text-white mb-4">
            Movie Trailers and More Content that you need
          </h4>
          <ul className="list-disc ml-5 text-lg max-w-3xl text-gray-300 mb-6">
            <li className="mb-1">Watch the latest movie trailers and get movie recommendation.</li>
            <li className="mb-1">Read movie ratings, movie reviews and see genres.</li>
            <li className="mb-1">
              Inform yourself about the current cast and crew with movie guide.
            </li>
            <li className="mb-1">
              Further Facts: Runtime, genre, release information, original title, production country
              & company, revenue, budget, etc.
            </li>
          </ul>
          <h5 className="text-2xl text-white mb-3">Download Our Mobile App Today!!</h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.darkhustlers.moviezninja"
            className="inline-block"
            target="_blank"
            rel="noreferrer noopener"
            title="Google Play"
          >
            <img
              src="/images/playstore-img.png"
              alt="Google Play"
              width="180"
              height="100"
              className="object-cover"
            />
          </a>
        </div>
      </section>
    </AppLayout>
  );
}
