
const once = (fn) => {
  function invoke(...args) {
    if (invoke._called) {
      return;
    }
    invoke._called = true;
    fn(...args);
  }
  return (...args) => invoke(...args);
}

export default once;
