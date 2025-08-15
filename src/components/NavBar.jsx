import Button from "./Button";
import { navBarMenu } from "../data/navbar";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";
import { useState } from "react";

export const NavBar = () => {
  const widthRef = useRef(null);
  const [, widthContainer] = useMeasureSize(widthRef);
  const isMobile = widthContainer < 750;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full" ref={widthRef}>
      <p className="brand-text absolute top-2 left-0 z-10 ms-5 text-primary md:ms-10 lg:ms-14 xl:ms-20 2xl:ms-30">
        HandSip
      </p>
      {isMobile ? (
        <div className="bg-white/50 px-5 py-2 backdrop-blur-sm">
          <span className="flex flex-row items-center justify-end gap-2">
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() => setShowMenu(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() => setShowMenu(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}

            <div className="w-fit">
              <Link to="/login">
                <Button variant={"primary"} text={"Login"} />
              </Link>
            </div>
          </span>
          {showMenu && (
            <span className="flex flex-row justify-center gap-4 pt-1">
              {navBarMenu.map((item) => (
                <NavLink to={item.link} key={item.id}>
                  <p className="normal-text text-black">{item.title}</p>
                </NavLink>
              ))}
            </span>
          )}
        </div>
      ) : (
        <span className="relative flex flex-row justify-center gap-6 bg-white/50 py-4 backdrop-blur-sm lg:gap-8">
          {navBarMenu.map((item) => (
            <NavLink to={item.link} key={item.id}>
              <p className="normal-text text-black">{item.title}</p>
            </NavLink>
          ))}
          <div className="absolute top-2 right-0 me-10 w-fit lg:me-14 xl:me-20 2xl:me-30">
            <Link to="/login">
              <Button variant={"primary"} text={"Login"} />
            </Link>
          </div>
        </span>
      )}
    </nav>
  );
};
