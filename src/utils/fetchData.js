import axios from 'axios';

export default async function fetchData(urls) {
  const results = await Promise.all(
    urls.map(async (item) => {
      const res = await axios.get(item.url);
      const { data } = await res;
      return { ...data, category: item.category };
    }),
  );

  return results;
}
