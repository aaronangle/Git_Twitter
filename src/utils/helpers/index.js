export function joinClassNames(...args) {
  return args.join(' ');
}
export function pluralizeName(name, length) {
  if (length !== 1) return name + 's';
  else return name;
}
