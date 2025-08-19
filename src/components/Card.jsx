import { useRef } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";
// eslint-disable-next-line no-unused-vars
import { animated } from "@react-spring/web";
import { useCardMotion } from "../styles/motion";

export const Card = ({ title, data }) => {
  const imgRef = useRef(null);
  const [_, imgWidth] = useMeasureSize(imgRef);
  // motion
  const { refContainer, titleCardStyle, cardStyle } = useCardMotion();

  return (
    <div
      ref={refContainer}
      className="px-5 py-18 md:px-10 md:py-26 lg:px-14 lg:py-30 xl:px-20 xl:py-26 2xl:px-40 2xl:py-30"
    >
      <div className="relative mb-4 w-full">
        <animated.p style={titleCardStyle} className="title-large text-center">
          {title}
        </animated.p>

        <span className="absolute top-0 right-0 flex h-full items-center max-md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-black hover:text-primary md:size-8 lg:size-9 2xl:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 md:flex md:flex-row md:gap-3 lg:gap-4">
        {cardStyle.map((style, i) => (
          <animated.div
            style={style}
            className="relative flex-1"
            ref={imgRef}
            key={data[i].id}
          >
            <img
              src={data[i].img}
              className={`${data[i].position} mb-1 w-full rounded-lg object-cover`}
              style={{ height: `${imgWidth}px` }}
            />
            <p className="normal-text font-semibold">{data[i].title}</p>
            {data[i].set ? (
              data[i].teapot && (
                <p className="normal-text text-black-400">
                  1 Teapot, {data[i].set} cups
                </p>
              )
            ) : (
              <p className="normal-text text-black-400">{data[i].volume} ml</p>
            )}
            {data[i].disc != 0 ? (
              <span className="flex flex-col">
                <div className="inline-flex gap-1">
                  <p className="normal-text text-success">$</p>
                  <p className="normal-text text-black-300 line-through">
                    {data[i].price.toFixed(2)}
                  </p>
                  <p className="normal-text font-semibold text-success">
                    {(
                      data[i].price -
                      (data[i].price * data[i].disc) / 100
                    ).toFixed(2)}
                  </p>
                </div>
                <p className="small-text absolute top-1 right-1 w-fit rounded-lg bg-white p-1 text-success">
                  {data[i].disc}% Off
                </p>
              </span>
            ) : (
              <span className="flex flex-col">
                <div className="inline-flex gap-1">
                  <p className="normal-text text-success">$</p>
                  <p className="normal-text font-semibold text-success">
                    {data[i].price.toFixed(2)}
                  </p>
                </div>
              </span>
            )}
          </animated.div>
        ))}

        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg bg-secondary-100 md:hidden"
          style={{ height: `${imgWidth}px` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 rounded-full bg-white p-1 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <p className="normal-text font-semibold">Show All</p>
        </div>
      </div>
    </div>
  );
};
