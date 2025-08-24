import { useState } from "react";
import Button from "./Button";
import { footer } from "../data/footer";
import { instaIcon, tiktokIcon, twitterIcon, youtubeIcon } from "../utils";
import { useFooter } from "../styles/motion";
// eslint-disable-next-line no-unused-vars
import { animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

export const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [containerRef, { width: widthContainer }] = useMeasure();
  const isMobile = widthContainer < 750;

  //motion
  const { transitions } = useFooter(showMenu);

  return (
    <footer className="flex w-full flex-col" ref={containerRef}>
      <div className="flex flex-col-reverse bg-secondary-200 xl:flex-row">
        <div className="flex flex-col gap-4 px-5 py-5 md:flex-row md:gap-2 md:px-10 md:max-xl:gap-8 lg:px-14 xl:flex-col xl:px-20 xl:py-10 2xl:px-30">
          <span className="flex flex-col gap-2 md:max-xl:w-6/12">
            <p className="brand-text text-primary">HandSip</p>
            <p className="normal-text">
              Homegrown handmade cup brand that brings warmth to every sip.
            </p>
          </span>

          <span className="flex flex-col gap-2 md:max-xl:w-6/12">
            <p className="normal-text font-semibold">
              Stay in touch with warm things.
            </p>
            <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white p-2 lg:px-3">
              <p className="normal-text text-primary">Ex: emily@email.com</p>
              <span className="w-fit">
                <Button variant={"primary"} text={"Subscribe"} />
              </span>
            </div>
            <span className="flex flex-col gap-2">
              <p className="normal-text font-semibold">Follow Us</p>
              <span className="flex flex-row gap-3">
                <img src={instaIcon} className="size-6" />
                <img src={tiktokIcon} className="size-6" />
                <img src={twitterIcon} className="size-6" />
                <img src={youtubeIcon} className="size-6" />
              </span>
            </span>
          </span>
        </div>

        <div className="flex flex-col justify-center px-5 max-xl:bg-secondary-100 max-md:gap-2 max-md:py-5 md:flex-row md:gap-20 md:max-lg:px-10 lg:max-xl:px-14 xl:w-10/12 xl:justify-between xl:gap-0 xl:pe-20 2xl:gap-20 2xl:pe-30">
          {footer.map((item) => (
            <div
              className="flex flex-col gap-1.5 md:py-5 lg:gap-2 xl:py-10"
              key={item.id}
            >
              {isMobile ? (
                <span className="flex flex-row items-center justify-between">
                  <p className="normal-text text-primary">{item.title}</p>
                  {showMenu == item.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-primary"
                      onClick={() => setShowMenu(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-primary"
                      onClick={() => {
                        setShowMenu(item.id);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              ) : (
                <p className="normal-text text-primary">{item.title}</p>
              )}
              {isMobile ? (
                <animated.div style={{ ...transitions, overflow: "hidden" }}>
                  {item.id == showMenu
                    ? item.menu.map((menu) => (
                        <p className="normal-text" key={menu}>
                          {menu}
                        </p>
                      ))
                    : null}
                </animated.div>
              ) : (
                item.menu.map((menu) => (
                  <p className="normal-text" key={menu}>
                    {menu}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary-300 py-2">
        <p className="normal-text text-center text-primary">
          HandSip, 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
