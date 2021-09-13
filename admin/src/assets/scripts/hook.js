import { useEffect, useState } from 'react';

// 自定义的custonHook
// export const UseMount = (cb) => {
//   useEffect(() => {
//     cb();
//   }, []);
// };

// 自定义的custonHook（节流）
export const UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次value发生变化后，设置一个定时器
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      return setDebouncedValue(value);
    }, delay);
  }, [value, delay]);
  return debouncedValue;
};
