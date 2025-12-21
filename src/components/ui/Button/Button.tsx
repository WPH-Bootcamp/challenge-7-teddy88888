import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => (
  <button className={className} {...rest}>
    {children}
  </button>
);
