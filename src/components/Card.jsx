import { useRef } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";

export const Card = ({ title, data }) => {
  const imgRef = useRef(null);
  const [_, imgWidth] = useMeasureSize(imgRef);

  return (
    <div className="md:px-10 md:py-26 lg:px-14 lg:py-30 xl:px-20 xl:py-26 2xl:p-30">
      <div className="relative mb-4 w-full">
        <p className="title-large text-center">{title}</p>

        <span className="absolute top-0 right-0 flex h-full items-center">
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
      <div className="flex flex-row gap-3 lg:gap-4">
        {data.map((item) => (
          <div className="relative flex-1" ref={imgRef} key={item.id}>
            <img
              src={item.img}
              className={`${item.position} mb-1 w-full rounded-lg object-cover`}
              style={{ height: `${imgWidth}px` }}
            />
            <p className="normal-text font-semibold">{item.title}</p>
            {item.set ? (
              item.teapot && (
                <p className="normal-text text-black-400">
                  1 Teapot, {item.set} cups
                </p>
              )
            ) : (
              <p className="normal-text text-black-400">{item.volume} ml</p>
            )}
            {item.disc != 0 ? (
              <span className="flex flex-col">
                <div className="inline-flex gap-1">
                  <p className="normal-text text-success">$</p>
                  <p className="normal-text text-black-300 line-through">
                    {item.price.toFixed(2)}
                  </p>
                  <p className="normal-text font-semibold text-success">
                    {(item.price - (item.price * item.disc) / 100).toFixed(2)}
                  </p>
                </div>
                <p className="small-text absolute top-1 right-1 w-fit rounded-lg bg-white p-1 text-success">
                  {item.disc}% Off
                </p>
              </span>
            ) : (
              <span className="flex flex-col">
                <div className="inline-flex gap-1">
                  <p className="normal-text text-success">$</p>
                  <p className="normal-text font-semibold text-success">
                    {item.price.toFixed(2)}
                  </p>
                </div>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
