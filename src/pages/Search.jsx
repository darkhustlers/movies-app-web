import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchPage from '../modules/SearchPage';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery();
  const q = query.get('q');

  return <SearchPage query={q} />;
}
