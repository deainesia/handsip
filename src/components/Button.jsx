export default function Button({ logo, type, variant, text }) {
  function PrimaryButton() {
    return (
      <button
        type={type}
        className="normal-text inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-3 py-2 font-playfair tracking-wide text-white lg:px-4"
      >
        <p>{text}</p>
      </button>
    );
  }

  function OutlineButton() {
    return (
      <button className="normal-text relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 font-playfair tracking-wide text-black outline-2 outline-gray lg:px-4">
        <img
          src={logo}
          className="absolute left-4 my-0.5 h-4 w-4 lg:h-5 lg:w-5"
        />
        <p>{text}</p>
      </button>
    );
  }

  function DisableButton() {
    return (
      <button
        type={type}
        className="inline-flex w-full cursor-default items-center justify-center rounded-lg bg-gray px-3 py-2 font-playfair tracking-wide text-white lg:px-4"
      >
        <p>{text}</p>
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
