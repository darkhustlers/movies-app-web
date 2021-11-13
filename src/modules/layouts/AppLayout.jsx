import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
