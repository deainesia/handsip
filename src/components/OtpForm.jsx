// import { input } from "motion/react-client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "./Button";

export default function OtpForm({ email, size }) {
  const [otp, setOtp] = useState([...Array(5)]);
  const inputRefs = useRef([]);
  const [success, setSuccess] = useState(false);

  const [height] = size;

  const handleChange = (i, valueInput) => {
    const result = [...otp];
    result[i] = valueInput;
    setOtp(result);

    if (valueInput != "" && i < otp.length - 1) {
      inputRefs.current[i + 1].focus();
    }

    if (result.every((val) => val != undefined)) setSuccess(true);
  };

  useEffect(() => {
    if (inputRefs) inputRefs.current[0].focus();
  }, []);

  return (
    <div
      className="xl:z-5 max-xl:rounded-t-4xl absolute bottom-0 z-10 w-full max-xl:bg-white xl:h-screen xl:backdrop-brightness-50"
      style={{ height: `${height}px` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center xl:absolute xl:right-0 xl:w-8/12">
        <p className="form-title mb-2 text-black xl:text-white">Enter Code</p>
        <p className="normal-text text-black xl:text-white">
          We sent code to <span className="semibold-text">{email}</span>
        </p>
        <div className="my-6 flex flex-row gap-4">
          {otp.map((_, i) => {
            return (
              <input
                key={`otp-${i}`}
                type="text"
                className={`${success ? "outline-success text-success bg-success/20" : "outline-gray bg-gray text-black xl:bg-white/20"} form-title h-16 w-14 rounded-xl text-center outline-1 backdrop-blur-2xl xl:text-white`}
                maxLength={1}
                style={{ textTransform: "uppercase" }}
                autoComplete="off"
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => handleChange(i, e.target.value)}
                disabled={success}
              />
            );
          })}
        </div>

        <div className={`${success ? "invisible" : "visible"}`}>
          <p className="normal-text text-black xl:text-white">
            Didn't receive code?{" "}
            <span className="semibold-text cursor-pointer underline">
              Resend
            </span>
          </p>
        </div>

        <div className={`${success ? "visible w-3/12" : "invisible"}`}>
          <Button variant={"primary"} text={"Back"} />
        </div>
      </div>
    </div>
  );
}
