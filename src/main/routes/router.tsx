import { makeHome, makeLayout } from "@/main/factories/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource-variable/raleway/index.css";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={makeLayout()}>
          <Route path="/" element={makeHome()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
