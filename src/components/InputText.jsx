export default function InputText({ type, name, id, focus }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder="ex: amelie@email.com"
      className="font-playfair outline-gray focus:outline-primary rounded-lg bg-white p-2.5 text-black outline-2"
      autoFocus={focus}
    />
  );
}
