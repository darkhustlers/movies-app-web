export default function sectionFilter({ movies, tvShows } = []) {
  return {
    movies: [
      {
        title: 'Popular',
        data: movies.filter((item) => item.category === 'Popular'),
        category: 'Movies',
      },
      {
        title: 'Trending',
        data: movies.filter((item) => item.category === 'Trending'),
        category: 'Movies',
      },
    ],
    tvShows: [
      {
        title: 'Popular',
        data: tvShows.filter((item) => item.category === 'Popular'),
        category: 'TV Shows',
      },
      {
        title: 'Trending',
        data: tvShows.filter((item) => item.category === 'Trending'),
        category: 'TV Shows',
      },
    ],
  };
}
