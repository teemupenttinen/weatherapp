export default function epochConverter(time) {
  if (!time) {
    return '00:00';
  }
  return new Date(time * 1000).toTimeString().slice(0, 5);
}
