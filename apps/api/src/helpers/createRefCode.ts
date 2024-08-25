export const rCode = (name: string, pnumber: string) => {
  return `${name.slice(name.length - 2).toUpperCase()}${pnumber.slice(pnumber.length - 4)}${name.slice(0, 3).toUpperCase()}`;
};
