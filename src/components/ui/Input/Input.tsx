import type { InputHTMLAttributes } from "react";

//give type here
const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};

export default Input;
