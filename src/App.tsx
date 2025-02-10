import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import NotFound from "./screens/NotFount";

import Home from "./screens/Home";
import Utilities from "./screens/utilities/Utilities";
import RNC from "./screens/utilities/RNC";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="utilities">
            <Route index element={<Utilities />} />
            <Route path="rnc" element={<RNC />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
