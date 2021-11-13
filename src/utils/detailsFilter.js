export default function sectionFilter(results = []) {
  const details = {
    data: results.filter((item) => item.category === 'Details'),
    category: 'Details',
  };
  const recommendations = {
    data: results.filter((item) => item.category === 'Recommendations'),
    category: 'Recommendations',
  };

  const credits = {
    data: results.filter((item) => item.category === 'Credits'),
    category: 'Credits',
  };

  return {
    details,
    recommendations,
    credits,
  };
}
