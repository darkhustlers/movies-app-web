import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

export default function CardEntities({ children }) {
  const entityRef = useRef('');
  const [scrollAmount, setScrollAmount] = useState(0);
  const [maxScrollAmount, setMaxScrollAmount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (entityRef.current.scrollWidth > entityRef.current.clientWidth) {
        setMaxScrollAmount(entityRef.current.scrollWidth - entityRef.current.clientWidth);
      } else {
        setMaxScrollAmount(entityRef.current.scrollWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (entityRef.current.scrollWidth > entityRef.current.clientWidth) {
      setMaxScrollAmount(entityRef.current.scrollWidth - entityRef.current.clientWidth);
    } else {
      setMaxScrollAmount(entityRef.current.scrollWidth);
    }
    entityRef.current.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth',
    });
  }, [scrollAmount]);

  const handleRightClick = () => {
    if (scrollAmount < maxScrollAmount) {
      setScrollAmount((prevAmount) => prevAmount + 400);
    }
  };
  const handleLeftClick = () => {
    if (scrollAmount > 0) {
      setScrollAmount((prevAmount) => prevAmount - 400);
    }
  };

  return (
    <div className="relative" tabIndex="-1">
      <div
        ref={entityRef}
        className="h-44 md:h-60 flex items-center space-x-4 overflow-x-auto hide-scrollbar relative"
        tabIndex="-1"
      >
        {children}
      </div>
      {scrollAmount > 0 && (
        <button
          type="button"
          className="w-9 h-12 md:w-10 md:h-16 flex justify-center items-center border-r-2 border-t-2 border-b-2 rounded border-gray-300 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-black to-left text-primary"
          onClick={handleLeftClick}
        >
          <span>
            <ChevronLeftIcon />
          </span>
        </button>
      )}
      {scrollAmount < maxScrollAmount && (
        <button
          type="button"
          className="w-9 h-12 md:w-10 md:h-16 flex justify-center items-center border-l-2 border-t-2 border-b-2 rounded border-gray-300 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-black to-right text-primary"
          onClick={handleRightClick}
        >
          <span>
            <ChevronRightIcon />
          </span>
        </button>
      )}
    </div>
  );
}

CardEntities.defaultProps = {
  children: '',
};

CardEntities.propTypes = {
  children: PropTypes.node,
};
