import { appleLogo, githubLogo, googleLogo } from "../utils";
import Button from "./Button";
import InputText from "./InputText";
import Toggle from "./Toggle";
import { useState } from "react";
import Warning from "./Warning";
import validator from "validator";
import { useRef } from "react";
import { useCallback } from "react";
import OtpForm from "./OtpForm";
import { useMeasureSize } from "../utils/measure-size";
import { useEffect } from "react";

export default function EmailForm({ sizeVal }) {
  const containerRef = useRef();
  const size = useMeasureSize(containerRef);

  useEffect(() => {
    if (size && size[0] && size[1]) sizeVal(size);
  }, [size, sizeVal]);

  const [toggle, setToggle] = useState(true);
  const [warn, setWarn] = useState();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState();
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
      setSuccess(false);
      return;
    }
    setWarn("");
    setSuccess(true);
    setEmail(email);
  }

  return (
    <>
      <div
        ref={containerRef}
        className="shadow-gray max-xl:rounded-t-4xl xl:rounded-r-4xl 2xl:px-15 absolute bottom-0 z-10 h-fit w-full bg-white p-4 shadow-2xl md:max-xl:px-8 xl:h-screen xl:w-4/12 xl:px-10"
      >
        <div className="absolute hidden items-center gap-3 xl:block">
          <p className="text-primary font-bonheur text-3xl font-bold italic tracking-normal">
            HandSip.
          </p>
        </div>
        <div className="absolute bottom-5 right-5 inline-flex items-center gap-2">
          <a href="https://github.com/deainesia">
            <img src={githubLogo} alt="Github" width={20} height={20} />
          </a>
        </div>

        <div className="flex h-full w-full flex-col justify-center gap-2 p-6 md:max-xl:px-36 lg:gap-4 xl:p-10">
          <p className="form-title text-black">Welcome back</p>
          <p className="normal-text text-black">
            Enter your email to receive a one-time passcode.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-2 pb-1 lg:gap-4 lg:pb-4">
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
                  disabled={success ? true : false}
                />
              </div>

              <div className="inline-flex gap-1 lg:gap-2">
                <Toggle toggle={toggle} onHandleToggle={handleToggle} />
                <p
                  className={
                    toggle
                      ? "semibold-text text-black"
                      : "normal-text text-black"
                  }
                >
                  Remember me for 30 days
                </p>
              </div>
              <div className="w-full pt-2 lg:pt-4">
                <Button
                  type={"submit"}
                  variant={success ? "disable" : "primary"}
                  text={success ? "Code sent!" : "Send Code"}
                />
              </div>
            </div>
          </form>

          <div className="inline-flex w-full items-center gap-2">
            <div className="divider"></div>
            <p className="font-playfair pb-1 text-xs text-black">or</p>
            <div className="divider"></div>
          </div>

          <div className="flex w-full flex-col gap-3 py-2 lg:py-4">
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

      {success && <OtpForm email={email} size={size} />}
    </>
  );
}
