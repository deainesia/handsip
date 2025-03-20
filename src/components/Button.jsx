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
      <button className="button-secondary">
        <img src={logo} width={24} height={24} /> {text}
      </button>
    );
  }

  return variant == "primary" ? <PrimaryButton /> : <OutlineButton />;
}
