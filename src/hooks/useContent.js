import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

export default function useContent(urls, target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(urls);
      setContent(data);
    };
    getData();
    return () => {
      setContent([]);
    };
  }, [urls]);

  return {
    [target]: content,
  };
}
