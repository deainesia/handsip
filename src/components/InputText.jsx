import { forwardRef } from "react";

const InputText = forwardRef(
  ({ type, name, id, placeholder, disabled }, ref) => {
    return (
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="font-playfair outline-gray focus:outline-primary w-full rounded-lg bg-white p-2 text-sm text-black outline-2 lg:p-2.5"
        ref={ref}
        disabled={disabled}
      />
    );
  },
);

export default InputText;
