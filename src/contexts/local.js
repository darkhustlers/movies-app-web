import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LocalStateContext = createContext();

function LocalStateProvider({ children }) {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <LocalStateContext.Provider value={{ showCategories, setShowCategories }}>
      {children}
    </LocalStateContext.Provider>
  );
}

export { LocalStateProvider, LocalStateContext };

LocalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
