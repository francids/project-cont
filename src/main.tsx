import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      appearance="light"
      accentColor="indigo"
      panelBackground="solid"
      grayColor="slate"
      radius="full"
      scaling="110%"
    >
      <App />
    </Theme>
  </StrictMode>
);
