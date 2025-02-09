import { CSSProperties } from "react";

declare global {
  interface Styles {
    [key: string]: CSSProperties;
  }
};
