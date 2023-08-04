import { useEffect, useState } from 'react';

// export const useDebounce = (callback, interval = 0) => {
//   const prevTimeoutIdRef = React.useRef();

//   return React.useCallback(
//     (...args) => {
//       clearTimeout(prevTimeoutIdRef.current);
//       prevTimeoutIdRef.current = setTimeout(() => {
//         clearTimeout(prevTimeoutIdRef.current);
//         callback(...args);
//       }, interval);
//     },
//     [callback, interval],
//   );
// };
// export default function useDebounce(callback, delay) {
//   const [debounceReady, setDebounceReady] = useState(true);

//   const debouncedCallback = useCallback(
//     (...args) => {
//       if (debounceReady) {
//         callback(...args);
//         setDebounceReady(false);
//       }
//     },
//     [debounceReady, callback],
//   );

//   useEffect(() => {
//     if (debounceReady) {
//       return undefined;
//     }
//     const interval = setTimeout(() => setDebounceReady(true), delay);
//     return () => clearTimeout(interval);
//   }, [debounceReady, delay]);

//   return debouncedCallback;
// }

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
