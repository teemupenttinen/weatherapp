export default function epochConverter(time) {
  if (!time) {
    return '00:00';
  }
  const timedate = new Date(time * 1000);
  return timedate.toTimeString().slice(0, 5);
}
