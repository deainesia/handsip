import React from "react";
import Button from "./Button";
import { footer } from "../data/footer";
import { instaIcon, tiktokIcon, twitterIcon, youtubeIcon } from "../utils";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="flex flex-row bg-secondary-200">
        <div className="flex flex-col gap-2 px-30 py-10">
          <p className="brand-text text-primary">HandSip</p>
          <p className="normal-text">
            Homegrown handmade cup brand that brings warmth to every sip.
          </p>
          <p className="semibold-text">Stay in touch with warm things.</p>
          <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white px-3 py-2">
            <p className="normal-text text-primary">Ex: emily@email.com</p>
            <span className="w-fit">
              <Button variant={"primary"} text={"Subscribe"} />
            </span>
          </div>
          <p className="semibold-text">Follow Us</p>
          <span className="flex flex-row gap-2">
            <img src={instaIcon} className="size-6" />
            <img src={tiktokIcon} className="size-6" />
            <img src={twitterIcon} className="size-6" />
            <img src={youtubeIcon} className="size-6" />
          </span>
        </div>

        <div className="flex w-8/12 flex-row justify-between pe-30">
          {footer.map((item) => (
            <div className="flex flex-col gap-2 py-10">
              <p className="normal-text text-primary" key={item.id}>
                {item.title}
              </p>
              {item.menu.map((menu) => (
                <p className="normal-text" key={menu}>
                  {menu}
                </p>
              ))}
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
