import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import NotFoundIcon from '../icons/404Icon';
import * as ROUTES from '../constants/routes';
import ArrowNarrowRightIcon from '../icons/ArrowNarrowRightIcon';

export default function NotFoundPage() {
  return (
    <AppLayout>
      <section className="min-h-screen h-full pt-10 pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="max-w-xl mx-auto mb-4 md:mb-8">
              <NotFoundIcon />
            </div>
            <h2 className="text-4xl md:text-6xl text-white font-semibold mb-4 md:mb-8">
              Oops! Page Not Found
            </h2>
            <p className="text-2xl md:text-2xl text-gray-400 mb-4 md:mb-8">
              Sorry, the page you are looking for is not found.
            </p>
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center px-4 py-2 cursor-pointer text-base md:text-lg border text-primary rounded border-primary group transition"
            >
              Back to Home
              <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                <ArrowNarrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
