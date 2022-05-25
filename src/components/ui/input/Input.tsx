import React, { FC } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<IProps> = ({ label, ...rest }) => (
  <div>
    {label ? <div>{label}</div> : null}
    <input {...rest} />
  </div>
);
