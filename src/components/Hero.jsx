import { useState } from "react";
import { heroSlides } from "../constant";
import { useLayoutEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen w-8/12 overflow-hidden">
      {heroSlides.map((item, i) => (
        <div
          className={`${i === currentSlide ? "block" : "hidden"} ${item.position} relative h-full w-full bg-cover p-10`}
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="heading-text text-secondary absolute">
            <p className="font-bonheur text-5xl">HandSip.</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
