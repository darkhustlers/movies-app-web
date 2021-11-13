import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_KEY, BASE_API_URL } from '../constants/paths';

export default function useSearch(q) {
  const [results, setResults] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (q !== '') {
          const res = await axios.get(
            `${BASE_API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(q)}`,
          );
          const data = await res.data;
          setResults(data);
        }
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    setLoading(true);
    setError(null);
    fetchResults();
    return () => {
      setResults({});
    };
  }, [q]);
  return { results, error, loading };
}
