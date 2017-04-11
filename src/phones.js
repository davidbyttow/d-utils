
export const normalize = (number = '') => {
  if (number.startsWith('+1')) {
    number = number.substring(2);
  }
  return number
    .split('')
    .filter(n => (n >= '0' && n <= '9'))
    .join('');
}

export const canonicalize = (number) => {
  const normalized = normalize(number);
  if (normalized.length === 10) {
    return `+1${normalized}`;
  } else if (normalized.length === 11 && normalized.charAt(0) === '1') {
    return `+${normalized}`;
  }
  return undefined;
};

export const formatReadable = (number) => {
  const n = normalize(number);
  const area = n.substring(0, 3);
  const first = n.substring(3, 6);
  const second = n.substring(6);
  if (second.length) {
    return `(${area}) ${first}-${second}`;
  } else if (first.length) {
    return `(${area}) ${first}`;
  } else if (area.length) {
    return `(${area}`;
  }
  return '';
};

export default {
  normalize,
  canonicalize,
  formatReadable,
};
