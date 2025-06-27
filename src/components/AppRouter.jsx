import { Routes, Route } from "react-router";
import { routes } from "../utils/routes";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.path} element={route.element()} />
      ))}
    </Routes>
  );
}
