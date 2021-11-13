import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerLinks from '../../data/headerLinks';
import CancelIcon from '../../icons/CancelIcon';
import * as ROUTES from '../../constants/routes';
import { showDocumentBodyScrollBar } from '../../utils/functions';

export default function MobileMenu({ setMobileMenuOpen }) {
  const location = useLocation();

  return (
    <div className="z-50">
      <div
        role="button"
        tabIndex="0"
        className="absolute w-full h-screen top-0 left-0 bg-black opacity-30 dark:bg-black"
        onClick={() => {
          setMobileMenuOpen((prevOpen) => !prevOpen);
          showDocumentBodyScrollBar();
        }}
        onKeyPress={() => ''}
      />
      <div className="absolute z-50 py-8 top-0 left-0 h-screen w-80 overflow-hidden bg-customgray-300 shadow-2xl">
        <div className="flex items-center justify-between px-5 mb-10">
          <div className="">
            <Link
              to={ROUTES.HOME}
              className="block text-white text-2xl cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customgray-300 focus:ring-white"
              title="MoviezNinja"
            >
              <span className="w-full h-full block">
                {/* <Logo /> */}
                MoviezNinja
                {/* <img src="logo.png" alt="logo" className="w-full h-full" /> */}
              </span>
            </Link>
          </div>
          <button
            type="button"
            className="text-gray-300 p-1 cursor-pointer hover:bg-lightgray hover:text-gray-200 rounded-full"
            onClick={() => {
              setMobileMenuOpen((prevOpen) => !prevOpen);
              showDocumentBodyScrollBar();
            }}
            title="Close"
          >
            <CancelIcon />
          </button>
        </div>
        <div className="px-5 mb-10">
          <p className="text-base text-gray-300">
            MoviezNinja is designed to help you discover your next favorite Movie/Series/Serial to
            watch with friends and family.
          </p>
        </div>
        <nav>
          <ul className="">
            {headerLinks.map((link) => (
              <li key={link.id} className="">
                <Link
                  to={link.href}
                  className={`${
                    link.href === location.pathname ? 'text-primary font-semibold' : 'text-white'
                  } block text-base px-5 py-3 hover:bg-lightgray focus:outline-none focus:ring-2 focus:ring-primary`}
                  title={link.title}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  setMobileMenuOpen: PropTypes.func.isRequired,
};
