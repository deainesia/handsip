import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function OtpForm({ email }) {
  const [success, setSuccess] = useState(false);
  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();

  useEffect(() => {
    if (otp1.current) {
      otp1.current.focus();
    }
  }, []);

  return (
    <div className="fixed right-0 z-10 h-screen w-8/12 backdrop-brightness-50">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="form-title mb-2 text-white">Enter Code</p>
        <p className="normal-text text-white">
          We sent code to <span className="semibold-text">{email}</span>
        </p>
        <div className="my-6 flex flex-row gap-4">
          <input
            type="text"
            name="otp-1"
            className={`${success ? "outline-success bg-success/20" : "outline-gray bg-white/20"} form-title h-16 w-14 rounded-xl text-center text-white outline-1 backdrop-blur-2xl`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
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
            className={`${success ? "outline-success bg-success/20" : "outline-gray bg-white/20"} form-title h-16 w-14 rounded-xl text-center text-white outline-1 backdrop-blur-2xl`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
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
            className={`${success ? "outline-success bg-success/20" : "outline-gray bg-white/20"} form-title h-16 w-14 rounded-xl text-center text-white outline-1 backdrop-blur-2xl`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
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
            className={`${success ? "outline-success bg-success/20" : "outline-gray bg-white/20"} form-title h-16 w-14 rounded-xl text-center text-white outline-1 backdrop-blur-2xl`}
            maxLength={1}
            style={{ textTransform: "uppercase" }}
            ref={otp4}
            onChange={(e) => {
              if (e.target.value.length === 1) setSuccess(true);
            }}
            disabled={success}
          />
        </div>

        {!success && (
          <p className="normal-text text-white">
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
