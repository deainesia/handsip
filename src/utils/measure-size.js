import { useLayoutEffect } from "react";
import { useState } from "react";

export function useMeasureSize(sizeRef) {
  const [size, setSize] = useState([null, null]);
  // eslint-disable-next-line no-unused-vars
  const [height, width] = size;

  useLayoutEffect(() => {
    const updateSize = () => {
      if (sizeRef.current)
        setSize([sizeRef.current.offsetHeight, sizeRef.current.offsetWidth]);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [sizeRef]);
  return size;
}
