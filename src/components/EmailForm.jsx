import { appleLogo, githubLogo, googleLogo } from "../utils";
import Button from "./Button";
import InputText from "./InputText";
import Toggle from "./Toggle";
import { useState } from "react";
import Warning from "./Warning";
import validator from "validator";
import { useRef } from "react";
import { useCallback } from "react";

export default function EmailForm() {
  const [toggle, setToggle] = useState(true);
  const [warn, setWarn] = useState();
  const emailRef = useRef();

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;

    const isValid = validator.isEmail(email);
    if (!isValid) {
      setWarn("Please enter a valid email address.");
      emailRef.current.focus();
      return;
    }
    setWarn("");
  }

  return (
    <div className="relative h-screen w-4/12 bg-white p-4">
      <div className="absolute inline-flex items-center gap-3">
        <p className="text-primary font-bonheur text-3xl font-bold italic tracking-normal">
          HandSip.
        </p>
      </div>
      <div className="absolute bottom-3 right-5 inline-flex items-center gap-2">
        <a href="https://github.com/deainesia">
          <img src={githubLogo} alt="Github" width={20} height={20} />
        </a>
      </div>

      <div className="flex h-full w-full flex-col justify-center gap-4 p-14">
        <p className="form-title">Welcome back</p>
        <p className="normal-text">
          Enter your email to receive a one-time passcode.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-4 pb-4">
            <div className="w-full">
              <div className="h-[20px]">
                <Warning text={warn} />
              </div>
              <InputText
                type={"text"}
                name={"email"}
                id={"email"}
                placeholder={"ex: amelie@email.com"}
                ref={emailRef}
                aria-label="Email address"
              />
            </div>

            <div className="inline-flex gap-2">
              <Toggle toggle={toggle} onHandleToggle={handleToggle} />
              <p className={toggle ? "semibold-text" : "normal-text"}>
                Remember me for 30 days
              </p>
            </div>
            <div className="w-full pt-4">
              <Button type={"submit"} variant={"primary"} text={"Send Code"} />
            </div>
          </div>
        </form>

        <div className="inline-flex w-full items-center gap-2">
          <div className="divider"></div>
          <p className="font-playfair pb-1 text-xs text-black">or</p>
          <div className="divider"></div>
        </div>

        <div className="flex w-full flex-col gap-3 py-4">
          <Button
            variant={"outline"}
            text={"Sign in with Google"}
            logo={googleLogo}
          />
          <Button
            variant={"outline"}
            text={"Sign in with Apple ID"}
            logo={appleLogo}
          />
        </div>
      </div>
    </div>
  );
}
