
export default function shallowEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (const k of aKeys) {
    if (!b.hasOwnProperty(k)) {
      return false;
    }
    if (a[k] !== b[k]) {
      return false;
    }
  }
  return true;
}

export const shallowComparator = (a, b) => shallowEquals(a, b);
