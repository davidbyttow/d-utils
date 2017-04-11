
export const stringToHashtag = (v = '') => {
  let value = v;
  if (value.length === 0) {
    return '';
  }
  let str = '';
  if (value.charAt(0) === '#') {
    value = value.substring(1);
  }
  for (const ch of value.split('')) {
    const isAlpha = (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    if (str.length === 0) {
      if (isAlpha) {
        str += ch;
      }
    } else {
      const isNumeric = ch >= '0' && ch <= '9';
      if (isAlpha || isNumeric) {
        str += ch;
      } else if (ch === ' ' || ch === '-') {
        if (str.charAt(str.length - 1) !== '-') {
          str += '-';
        }
      }
    }
  }
  return `#${str}`;
};

export default {
  stringToHashtag,
};
