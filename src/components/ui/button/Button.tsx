import React, { FC } from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const Button: FC<IButtonProps> = ({ buttonText, ...rest }) => (
  <button {...rest}>{buttonText}</button>
);
