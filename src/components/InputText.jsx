import { forwardRef } from "react";

const InputText = forwardRef(
  ({ type, name, id, title, placeholder, disabled, warn }, ref) => {
    return (
      <>
        <div className="h-[20px]">
          <p className="small-text w-full text-black">{title}</p>
        </div>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full rounded-lg bg-white p-2 font-playfair text-sm text-black outline-2 outline-gray focus:outline-primary lg:p-2.5"
          ref={ref}
          disabled={disabled}
        />
        <div className="h-[20px]">
          <p className="small-text w-full text-primary">{warn}</p>
        </div>
      </>
    );
  },
);

export default InputText;
