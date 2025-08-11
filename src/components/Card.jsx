import { useRef } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";

export const Card = ({ title, data }) => {
  const imgRef = useRef(null);
  const [_, imgWidth] = useMeasureSize(imgRef);

  return (
    <div className="xl:px-20 xl:py-26 2xl:p-30">
      <div className="relative mb-4 w-full">
        <p className="title-large text-center">{title}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute right-0 text-black hover:text-primary xl:top-1.5 xl:size-9 2xl:top-0 2xl:size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
      <div className="flex flex-row gap-4">
        {data.map((item) => (
          <div className="relative flex-1" ref={imgRef}>
            <img
              src={item.img}
              className={`${item.position} mb-1 w-full rounded-lg object-cover`}
              style={{ height: `${imgWidth}px` }}
            />
            <p className="title-small font-bold">{item.title}</p>
            {item.set ? (
              <span className="inline-flex gap-1">
                {item.teapot && (
                  <p className="normal-text text-black-400">1 Teapot with</p>
                )}
                <p className="normal-text text-black-400">{item.set} cups</p>
              </span>
            ) : (
              <p className="normal-text text-black-400">{item.volume} ml</p>
            )}
            {item.disc != 0 ? (
              <span className="flex flex-col">
                <div className="inline-flex gap-1">
                  <p className="title-small text-success">$</p>
                  <p className="title-small text-black-300 line-through">
                    {item.price.toFixed(2)}
                  </p>
                  <p className="title-small font-bold text-success">
                    {(item.price - (item.price * item.disc) / 100).toFixed(2)}
                  </p>
                </div>
                <p className="small-text absolute top-1 right-1 w-fit rounded-lg bg-white p-1 text-success">
                  {item.disc}% Off
                </p>
              </span>
            ) : (
              <p className="title-small font-bold text-success">
                $ {item.price.toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
