import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function OtpForm({ email, size }) {
  const [success, setSuccess] = useState(false);
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();

  const [height] = size;

  useEffect(() => {
    if (otp1.current) {
      otp1.current.focus();
    }
  }, []);

  return (
    <div
      className="z-5 absolute bottom-0 w-full max-sm:bg-white lg:h-screen lg:backdrop-brightness-50"
      style={{ height: `${height}px` }}
    >
      <div className="absolute flex h-full w-8/12 flex-col items-center justify-center lg:right-0">
        <p className="form-title mb-2 text-black lg:text-white">Enter Code</p>
        <p className="normal-text text-black lg:text-white">
          We sent code to <span className="semibold-text">{email}</span>
        </p>
        <div className="my-6 flex flex-row gap-4">
          <input
            type="text"
            name="otp-1"
            className={`${success ? "outline-success text-success bg-success/20" : "outline-gray bg-gray text-black lg:bg-white/20"} form-title h-16 w-14 rounded-xl text-center outline-1 backdrop-blur-2xl lg:text-white`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
            autoComplete="off"
            ref={otp1}
            onChange={(e) => {
              if (e.target.value.length === 1 && otp2.current)
                otp2.current.focus();
            }}
            disabled={success}
          />
          <input
            type="text"
            name="otp-2"
            className={`${success ? "outline-success text-success bg-success/20" : "outline-gray bg-gray text-black lg:bg-white/20"} form-title h-16 w-14 rounded-xl text-center outline-1 backdrop-blur-2xl lg:text-white`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
            autoComplete="off"
            ref={otp2}
            onChange={(e) => {
              if (e.target.value.length === 1 && otp3.current)
                otp3.current.focus();
            }}
            disabled={success}
          />
          <input
            type="text"
            name="otp-3"
            className={`${success ? "outline-success text-success bg-success/20" : "outline-gray bg-gray text-black lg:bg-white/20"} form-title h-16 w-14 rounded-xl text-center outline-1 backdrop-blur-2xl lg:text-white`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
            autoComplete="off"
            ref={otp3}
            onChange={(e) => {
              if (e.target.value.length === 1 && otp4.current)
                otp4.current.focus();
            }}
            disabled={success}
          />
          <input
            type="text"
            name="otp-4"
            className={`${success ? "outline-success text-success bg-success/20" : "outline-gray bg-gray text-black lg:bg-white/20"} form-title h-16 w-14 rounded-xl text-center outline-1 backdrop-blur-2xl lg:text-white`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
            autoComplete="off"
            ref={otp4}
            onChange={(e) => {
              if (e.target.value.length === 1) setSuccess(true);
            }}
            disabled={success}
          />
        </div>

        {!success && (
          <p className="normal-text text-black lg:text-white">
            Didn't receive code?{" "}
            <span className="semibold-text cursor-pointer underline">
              Resend
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
