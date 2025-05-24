import { useState } from "react";
import { heroSlides } from "../constant";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useMeasureHeight } from "../utils/measure-size";

export default function Hero({ height }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef();
  const containerHeight = useMeasureHeight(containerRef);
  const imageHeight = containerHeight - height;

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 h-screen w-screen overflow-hidden lg:w-8/12"
      ref={containerRef}
    >
      {heroSlides.map((item, i) => (
        <div
          className={`${i === currentSlide ? "block" : "hidden"} ${item.position} relative h-full w-full bg-cover p-6 lg:p-10`}
          key={item.id}
          style={{
            backgroundImage: `url(${item.image})`,
            height: `${imageHeight}px`,
          }}
        >
          <div className="heading-text text-secondary absolute">
            <p className="font-bonheur text-2xl lg:text-5xl">HandSip.</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
