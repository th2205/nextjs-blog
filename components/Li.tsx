import { ReactNode } from "react";
import cn from "classnames";
import { Theme } from "../types";
import style from "./Li.module.scss";

interface LiProps {
  children: ReactNode;
  theme?: Theme;
}

export default function Li({ children, theme = "primary" }: LiProps) {
  const classes = cn(style["ui-li"], style[`ui-li-theme--${theme}`]);

  return <li className={classes}>{children}</li>;
}
