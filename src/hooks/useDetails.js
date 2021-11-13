import { useEffect, useState } from 'react';
import { BASE_MOVIE_DETAILS_URL, BASE_TV_DETAILS_URL, API_KEY } from '../constants/paths';
import fetchData from '../utils/fetchData';

export default function useDetails(id, category) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const URL =
          category === 'movies'
            ? `${BASE_MOVIE_DETAILS_URL}/${id}`
            : `${BASE_TV_DETAILS_URL}/${id}`;
        const URLs = [
          {
            category: 'Details',
            url: `${URL}?api_key=${API_KEY}&language=en-US&append_to_response=videos,content_ratings`,
          },
          {
            category: 'Recommendations',
            url: `${URL}/recommendations?api_key=${API_KEY}`,
          },
          {
            category: 'Credits',
            url: `${URL}/credits?api_key=${API_KEY}`,
          },
        ];
        const results = await fetchData(URLs);
        setContent(results);
        setNotFound(false);
      } catch (err) {
        switch (err.response.status) {
          case 404:
            setNotFound(true);
            break;
          default:
            break;
        }
      }
      setLoading(false);
    };
    setLoading(true);
    setNotFound(null);
    fetchDetails();
  }, [id, category]);

  return {
    content,
    loading,
    notFound,
  };
}
