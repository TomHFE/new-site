import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  // debounce hook
  const [debounce, setDebounce] = useState(value);
  // debounce timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay || 500);
    // clean up
    return () => {
      clearTimeout(timer);
    };
    // dependency variables
  }, [value, delay]);
  return debounce;
}
export default useDebounce;
