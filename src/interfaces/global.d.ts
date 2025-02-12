import { CSSProperties } from "react";
import RNC from "./RNC";

declare global {
  interface Styles {
    [key: string]: CSSProperties;
  };

  interface Window {
    electron: {
      queryRNC: (search: string) => Promise<RNC[]>;
    };
  };
};
