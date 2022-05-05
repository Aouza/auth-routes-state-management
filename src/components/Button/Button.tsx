import { FC, ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <ButtonStyled type={type ?? "button"} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
