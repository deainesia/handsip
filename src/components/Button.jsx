export default function Button({ logo, type, variant, text }) {
  function PrimaryButton() {
    return (
      <button
        type={type}
        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-2 font-playfair text-sm font-semibold tracking-wide text-white md:text-base lg:py-2.5"
      >
        {text}
      </button>
    );
  }

  function OutlineButton() {
    return (
      <button className="relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 font-playfair text-sm font-semibold tracking-wide text-black outline-2 outline-gray md:text-base lg:py-2.5">
        <img
          src={logo}
          className="absolute left-4 my-0.5 h-4 w-4 lg:h-5 lg:w-5"
        />{" "}
        {text}
      </button>
    );
  }

  function DisableButton() {
    return (
      <button
        type={type}
        className="inline-flex w-full cursor-default items-center justify-center rounded-lg bg-gray px-5 py-2 font-playfair text-sm font-semibold tracking-wide text-white md:text-base lg:py-2.5"
      >
        {text}
      </button>
    );
  }

  switch (variant) {
    case "primary":
      return <PrimaryButton />;
    case "outline":
      return <OutlineButton />;
    case "disable":
      return <DisableButton />;
  }
}
