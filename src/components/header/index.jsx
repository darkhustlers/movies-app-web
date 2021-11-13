import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { LocalStateContext } from '../../contexts/local';
import SlidesContext from '../../contexts/slides';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchIcon from '../../icons/SearchIcon';
import MenuIcon from '../../icons/MenuIcon';
import * as ROUTES from '../../constants/routes';
import { hideDocumentBodyScrollBar, showDocumentBodyScrollBar } from '../../utils/functions';

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { showCategories, setShowCategories } = useContext(LocalStateContext);
  const { category, setCategory } = useContext(SlidesContext);

  const [scrollPos, setScrollPos] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearchTermError, setHasSearchTermError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === ROUTES.HOME) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  }, [location, setShowCategories]);

  useEffect(() => {
    const onScroll = ({ target }) => {
      setScrollPos(target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPos]);

  useEffect(() => {
    showDocumentBodyScrollBar();
  }, []);

  const handleSearchOpen = () => {
    hideDocumentBodyScrollBar();
    setSearchOpen(true);
  };

  const handleHideSearchOpen = () => {
    showDocumentBodyScrollBar();
    setSearchOpen(false);
  };

  const handleSubmit = () => {
    if (searchTerm === '') {
      setHasSearchTermError(true);
    } else {
      setHasSearchTermError(false);
      handleHideSearchOpen();
      history.push({ pathname: ROUTES.SEARCH, search: `?q=${searchTerm.trim()}` });
    }
  };

  return (
    <header
      className={`sticky inset-x-0 top-0 bg-black h-20 z-50 ${
        scrollPos > 1
          ? 'border-b border-primary shadow-sm backdrop-filter backdrop-blur-sm backdrop-saturate-150 bg-opacity-80'
          : ''
      }`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* menu icon */}
              <div className="sm:hidden mr-2">
                <button
                  type="button"
                  className="w-7 h-9"
                  onClick={() => {
                    setMobileMenuOpen((prevOpen) => !prevOpen);
                    hideDocumentBodyScrollBar();
                  }}
                >
                  <span className="sr-only">Menu Button</span>
                  <MenuIcon />
                </button>
              </div>
              {/* mobileMenu */}
              {mobileMenuOpen ? <MobileMenu setMobileMenuOpen={setMobileMenuOpen} /> : null}
              <div className="flex justify-between items-center space-x-3 sm:space-x-6">
                <Link
                  to={ROUTES.HOME}
                  className="text-2xl sm:ml-0 text-white cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                  title="MoviezNinja"
                >
                  <span className="sm:hidden w-11 h-11 block">
                    <img src="/images/logo.png" alt="Logo" className="w-full h-full" />
                  </span>
                  <span className="hidden sm:block">MoviezNinja</span>
                </Link>
                {/* categories */}
                {showCategories ? (
                  <div className="leading-normal space-x-4">
                    <button
                      type="button"
                      className={`text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary ${
                        category === 'movies' ? 'text-primary font-semibold' : 'text-white'
                      }`}
                      onClick={() => setCategory('movies')}
                      title="Movies"
                    >
                      Movies
                    </button>
                    <button
                      type="button"
                      className={`text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary ${
                        category === 'tvShows' ? 'text-primary font-semibold' : 'text-white'
                      }`}
                      title="TV Shows"
                      onClick={() => setCategory('tvShows')}
                    >
                      TV Shows
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="hidden sm:block">
                <Nav />
              </div>
              <div className="">
                <button
                  type="button"
                  title="Search"
                  className="h-6 w-6 sm:w-8 sm:h-8 rounded flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
                  onClick={handleSearchOpen}
                >
                  <SearchIcon />
                </button>
                <div
                  className={`${
                    searchOpen ? 'scale-1' : 'scale-0'
                  } transform fixed inset-0 z-50 w-full min-h-screen h-full isolate transition-transform ease-in-out bg-black bg-opacity-75`}
                  role="presentation"
                >
                  <div
                    className="absolute inset-0 -z-1 w-full h-full"
                    role="presentation"
                    onClick={handleHideSearchOpen}
                  />
                  <div className="max-w-3xl xl:max-w-5xl mx-auto pt-28 px-4">
                    <form onSubmit={handleSubmit}>
                      <div className="flex rounded overflow-hidden group">
                        <input
                          type="text"
                          className="w-full p-3 lg:p-4 text-white text-xl focus:outline-none group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-primary group-focus:ring-offset-black"
                          placeholder="Search Movies..."
                          value={searchTerm}
                          required="required"
                          onChange={({ target }) => setSearchTerm(target.value)}
                        />
                        <input
                          type="submit"
                          value="Search"
                          className="bg-primary px-4 text-lg text-black font-bold cursor-pointer"
                        />
                      </div>
                      {hasSearchTermError ? (
                        <div className="">
                          <p className="mt-1 text-red-500">Search field can&apos;t be empty!</p>
                        </div>
                      ) : null}
                    </form>

                    <button
                      type="button"
                      className="inline-block mt-6 px-4 py-1 text-base font-semibold text-black bg-primary rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-black"
                      title="Close"
                      onClick={handleHideSearchOpen}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
