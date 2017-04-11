export const upperCamelCase = (value = '') => value.split(' ')
  .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
  .join(' ');

export default {
  upperCamelCase,
};
