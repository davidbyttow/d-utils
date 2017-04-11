import invariant from 'invariant';

export const withEntry = (obj, key, value) => {
  invariant(typeof obj === 'object', 'expected object');
  return {
    ...obj,
    [key]: value,
  };
};

export const withoutEntry = (obj, key) => {
  invariant(typeof obj === 'object', 'expected object');
  const copy = { ...obj };
  delete copy[key];
  return copy;
};

export const withValue = (array, value) => {
  invariant(Array.isArray(array), 'expected array');
  return array.includes(value) ? array : [...array, value];
};

export const withoutValue = (array, value) => {
  invariant(Array.isArray(array), 'expected array');
  return array.filter(v => v !== value);
};

export default {
  withEntry,
  withoutEntry,
  withValue,
  withoutValue,
};
