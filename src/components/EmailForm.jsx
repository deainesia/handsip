import { logoBrand } from "../utils";

export default function EmailForm() {
  return (
    <div className="h-screen w-5/12 bg-white p-4">
      <div className="inline-flex items-center gap-3">
        <img src={logoBrand} alt="HandSip logo brand" width={48} height={48} />
        <p className="text-primary font-playfair text-[16px] font-bold italic tracking-normal">
          Handmade cups for perfect sips.
        </p>
      </div>
      <div className="">
        <p>Welcome back</p>
        <p>Enter your email to receive a one-time passcode.</p>
        <input type="email" name="email" id="email" />
        <div className="">
          <p>toggle</p>
          <p>Remember me for 30 days</p>
        </div>
        <button type="submit">Sent code</button>
        <p>or</p>
        <div className="">
          <button>Sign in with Goggle</button>
          <button>Sign in with Apple ID</button>
        </div>
      </div>
    </div>
  );
}
