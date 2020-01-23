export default function epochConverter(time) {
  if (!time) {
    return '00:00';
  }
  const timedate = new Date(time * 1000);
  timedate.setMinutes(timedate.getMinutes() + timedate.getTimezoneOffset());
  return timedate.toTimeString().slice(0, 5);
}
