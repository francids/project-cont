import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import NotFoundScreen from "./screens/NotFount";

import HomeScreen from "./screens/Home";
import StatementsScreen from "./screens/statements/StatementsScreen";
import PurchasingFormatScreen from "./screens/statements/PurchasingFormatScreen";
import ShippingFormatScreen from "./screens/statements/ShippingFormatScreen";
import UtilitiesScreen from "./screens/utilities/Utilities";
import RNCScreen from "./screens/utilities/RNC";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="statements">
            <Route index element={<StatementsScreen />} />
            <Route path="purchases" element={<PurchasingFormatScreen />} />
            <Route path="shipping" element={<ShippingFormatScreen />} />
          </Route>
          <Route path="utilities">
            <Route index element={<UtilitiesScreen />} />
            <Route path="rnc" element={<RNCScreen />} />
          </Route>
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
