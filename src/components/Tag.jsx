import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "./Button";

export const Tag = ({ title }) => {
  const tagScroll = useRef();
  const [tag, setTag] = useState(title);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setTag(title);
  }, [title]);

  useLayoutEffect(() => {
    const el = tagScroll.current;
    if (!el) return;

    const isOverflow = el.scrollWidth > el.clientWidth;

    if (isOverflow && tag.length > 0) {
      setTag((prev) => prev.slice(0, -1));
      return;
    }
  }, [tag]);

  return (
    <>
      <span
        className="flex flex-row items-center gap-1 overflow-auto lg:gap-2"
        ref={tagScroll}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 shrink-0"
        >
          <path
            fillRule="evenodd"
            d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
            clipRule="evenodd"
          />
        </svg>
        {tag.map((item) => (
          <p
            className="normal-text rounded-lg bg-white/50 px-4 py-1 text-nowrap text-black backdrop-blur-sm"
            key={item}
          >
            {item}
          </p>
        ))}

        {tag.length < title.length && !showAll && (
          <button
            className="normal-text rounded-lg bg-white/50 px-4 py-1 text-nowrap text-black backdrop-blur-sm"
            onClick={() => setShowAll(true)}
          >
            +
          </button>
        )}
      </span>

      {showAll && (
        <span className="mx-[26px] my-1 flex flex-row flex-wrap items-center gap-1 lg:gap-2">
          {title
            .filter((item) => !tag.includes(item))
            .map((item) => (
              <p
                key={item}
                className="normal-text rounded-lg bg-white/50 px-4 py-1 text-nowrap text-black backdrop-blur-sm"
              >
                {item}
              </p>
            ))}

          <button
            className="normal-text rounded-lg bg-white/50 px-4 py-1 text-nowrap text-black backdrop-blur-sm"
            onClick={() => setShowAll(false)}
          >
            -
          </button>
        </span>
      )}
    </>
  );
};
