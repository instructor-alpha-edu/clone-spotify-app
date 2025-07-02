import { useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "./components/Layout";
import AppRouter from "./components/AppRouter";
import { getAccessToken } from "./services/auth";
import "./assets/css/style.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    async function getToken() {
      await getAccessToken();
    }
    getToken();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
