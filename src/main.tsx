import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";

import Layout from "./Layout.tsx";

import "./styles/main.css";
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
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);
