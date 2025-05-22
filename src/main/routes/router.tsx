import { makeHome, makeLayout } from "@/main/factories/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource-variable/raleway/index.css";
import { ThemeProvider } from "@/presentation/hooks/theme-provider";

export function Router() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tulio-portfolio-theme">
      <BrowserRouter>
        <Routes>
          <Route element={makeLayout()}>
            <Route path="/" element={makeHome()} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
