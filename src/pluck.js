
export default function pluck(obj, keys) {
  const out = {};
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
}
