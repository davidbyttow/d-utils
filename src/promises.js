import invariant from 'invariant';
import once from './once';

export const withTimeout = (promise, seconds, onTimeout) => {
  invariant(seconds > 0, 'Timeout cannot be zero');
  return new Promise((resolve, reject) => {
    setTimeout(
      once(() => onTimeout(resolve, reject)),
      seconds * 1000);
    return promise.then(once(resolve)).catch(once(reject));
  });
};

export default {
  withTimeout,
};
