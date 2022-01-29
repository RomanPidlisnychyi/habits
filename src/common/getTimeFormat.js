export default function getTimeFormat(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  const newMins = mins >= 0 ? mins : 0;
  const newSecs = secs >= 0 ? secs : 0;
  const newHours = hours >= 0 ? hours : 0;

  return {
    hours: String(newHours).padStart(2, '0'),
    mins: String(newMins).padStart(2, '0'),
    secs: String(newSecs).padStart(2, '0'),
  };
}
