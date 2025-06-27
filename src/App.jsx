import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRouter from "./components/AppRouter";
import "./assets/css/style.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
