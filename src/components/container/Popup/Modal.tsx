import type { FC, ReactNode } from "react";
// fix this component, and there's more props you can use here
interface ModalProps {
  children?: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Modal;
