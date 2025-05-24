import { useLayoutEffect } from "react";
import { useState } from "react";

export function useMeasureHeight(heightRef) {
  const [height, setHeight] = useState(null);
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (heightRef.current) {
        setHeight(heightRef.current.offsetHeight);
      }
    };

    updateHeight;

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [heightRef]);
  return height;
}
