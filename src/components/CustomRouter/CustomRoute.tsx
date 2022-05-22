import React, { FC } from "react";

interface IProps {
  path: string;
  element: any;
}

export const CustomRoute: FC<IProps> = ({ element }) => element;
