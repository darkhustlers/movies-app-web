function convertToHoursMinutes(time) {
  const hours = time / 60;
  const rHours = Math.floor(hours);
  const minutes = (hours - rHours) * 60;
  const rMinutes = Math.round(minutes);

  return `${rHours}h ${rMinutes}m`;
}

export function hideDocumentBodyScrollBar() {
  if (!document.body.classList.contains('overflow-hidden')) {
    document.body.classList.add('overflow-hidden');
  }
}

export function showDocumentBodyScrollBar() {
  if (document.body.classList.contains('overflow-hidden')) {
    document.body.classList.remove('overflow-hidden');
  }
}

export default convertToHoursMinutes;
