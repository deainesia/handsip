import { useRef } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";

export const Card = ({
  img,
  position,
  title,
  set,
  volume,
  teapot,
  price,
  disc,
}) => {
  const imgRef = useRef(null);
  const [_, imgWidth] = useMeasureSize(imgRef);

  return (
    <div className="relative flex-1" ref={imgRef}>
      <img
        src={img}
        className={`${position} mb-1 w-full rounded-lg object-cover`}
        style={{ height: `${imgWidth}px` }}
      />
      <p className="title-small font-bold">{title}</p>
      {set ? (
        <span className="inline-flex gap-1">
          {teapot && (
            <p className="normal-text text-black-400">1 Teapot with</p>
          )}
          <p className="normal-text text-black-400">{set} cups</p>
        </span>
      ) : (
        <p className="normal-text text-black-400">{volume} ml</p>
      )}
      {disc != 0 ? (
        <>
          <div className="inline-flex gap-1">
            <p className="title-small text-success">$</p>
            <p className="title-small text-black-300 line-through">
              {price.toFixed(2)}
            </p>
            <p className="title-small font-bold text-success">
              {(price - (price * disc) / 100).toFixed(2)}
            </p>
          </div>
          <p className="small-text absolute top-1 right-1 w-fit rounded-lg bg-white p-1 text-success">
            {disc}% Off
          </p>
        </>
      ) : (
        <p className="title-small font-bold text-success">
          $ {price.toFixed(2)}
        </p>
      )}
    </div>
  );
};
