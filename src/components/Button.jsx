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
        <img src={logo} width={20} height={20} /> {text}
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
