import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    window.theme.get().then(setIsDarkMode);
    window.theme.onUpdated(setIsDarkMode);
  }, []);

  return (
    <StrictMode>
      <Theme
        appearance={isDarkMode ? "dark" : "light"}
        accentColor="indigo"
        panelBackground="solid"
        grayColor="slate"
        radius="full"
      >
        <App />
      </Theme>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
