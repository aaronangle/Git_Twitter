export function joinClassNames(...args) {
  return args.join(' ');
}

export function pluralizeName(name, length) {
  if (length !== 1) return name + 's';
  else return name;
}

const millisecondsInDay = 86400000;
const currentMill = new Date().getTime();
const yesterdayMill = currentMill - millisecondsInDay;

export function formatEventTime(date) {
  const eventDate = new Date(date);
  const eventDateMill = eventDate.getTime();
  if (eventDateMill > yesterdayMill) {
    const hours = Math.round((currentMill - eventDateMill) / 3600000);
    if (hours < 1) return 'Just Now';
    else return `${hours} ${pluralizeName('Hr', hours)}`;
  } else {
    return eventDate.toLocaleString([], { month: 'short', day: 'numeric' });
  }
}
