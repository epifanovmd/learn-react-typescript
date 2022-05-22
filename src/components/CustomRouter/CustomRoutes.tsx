import React, { FC, Children } from "react";
import { RouterContext } from "./CustomRouter";

interface IProps {
  children: any;
}

export const CustomRoutes: FC<IProps> = ({ children }) => {
  const t = "";

  return (
    <RouterContext.Consumer>
      {({ state }: any) =>
        Children.map(children, (item: any) => item).filter(
          (item: any) => item.props.path === state.path,
        )
      }
    </RouterContext.Consumer>
  );
};

// Children.map(children, (item: any) => item).filter((path: any) => {
//   console.log("path", path);
//   console.log("state.path", state.path);
//   console.log("path === state.path", path === state.path);
//
//   return path === state.path;
// })
