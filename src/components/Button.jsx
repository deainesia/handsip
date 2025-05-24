export default function Button({ logo, type, variant, text }) {
  function PrimaryButton() {
    return (
      <button type={type} className="button-primary">
        {text}
      </button>
    );
  }

  function OutlineButton() {
    return (
      <button className="button-outline">
        <img src={logo} className="h-4 w-4 lg:h-5 lg:w-5" /> {text}
      </button>
    );
  }

  function DisableButton() {
    return (
      <button type={type} className="button-disable">
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
