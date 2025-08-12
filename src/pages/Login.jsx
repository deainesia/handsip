import { githubLogo, appleLogo, googleLogo } from "../utils";
import { useState, useRef, useCallback } from "react";
import { useMeasureSize } from "../hooks/useMeasureSize";
import validator from "validator";
import Button from "../components/Button";
import InputText from "../components/InputText";
import Toggle from "../components/Toggle";
import OtpForm from "../components/OtpForm";
import Hero from "../components/Hero";

export const Login = () => {
  const containerRef = useRef();
  const size = useMeasureSize(containerRef);

  const [toggle, setToggle] = useState(true);
  const [emailWarn, setEmailWarn] = useState();
  const [passWarn, setPassWarn] = useState();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState();
  const emailRef = useRef();
  const passRef = useRef();

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.password.value;

    if (pass == "") {
      setPassWarn("Please enter a password.");
      passRef.current.focus();
      setSuccess(false);
    } else {
      setPassWarn(undefined);
    }

    const isEmailValid = validator.isEmail(email);
    if (!isEmailValid) {
      setEmailWarn("Please enter a valid email address.");
      emailRef.current.focus();
      setSuccess(false);
    } else {
      setEmailWarn(undefined);
    }

    if (isEmailValid && pass) {
      setSuccess(true);
      setEmail(email);
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        className="absolute bottom-0 z-10 h-fit w-full bg-white p-4 shadow-2xl shadow-gray max-xl:rounded-t-4xl xl:h-screen xl:w-4/12 xl:rounded-r-4xl"
      >
        <div className="absolute hidden items-center gap-3 xl:block">
          <p className="brand-text text-primary">HandSip.</p>
        </div>
        <div className="absolute right-5 bottom-4 inline-flex items-center gap-2">
          <a href="https://github.com/deainesia">
            <img src={githubLogo} alt="Github" width={20} height={20} />
          </a>
        </div>

        <div className="flex h-full w-full flex-col justify-center gap-2 p-6 md:max-xl:px-36 lg:gap-4 xl:p-15">
          <p className="form-title text-black">Welcome back</p>
          <p className="normal-text text-black">
            Log in and continue your warm journey with handcrafted cups.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col pb-1 lg:pb-4">
              <div className="w-full">
                <InputText
                  type={"text"}
                  name={"email"}
                  title={"Email"}
                  placeholder={"ex: amelie@email.com"}
                  ref={emailRef}
                  aria-label="Email address"
                  warn={emailWarn}
                  disabled={success ? true : false}
                />
                <InputText
                  type={"password"}
                  name={"password"}
                  title={"Password"}
                  placeholder={"password"}
                  aria-label="Password"
                  ref={passRef}
                  warn={passWarn}
                  disabled={success ? true : false}
                />
                <div className="inline-flex gap-1 pt-1 lg:gap-2">
                  <Toggle toggle={toggle} onHandleToggle={handleToggle} />
                  <p
                    className={
                      toggle
                        ? "normal-text font-semibold text-black"
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
                    text={success ? "Code sent!" : "Log in"}
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="inline-flex w-full items-center gap-2">
            <div className="divider"></div>
            <p className="pb-1 font-playfair text-xs text-black">or</p>
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

      <Hero size={size} />
    </>
  );
};
