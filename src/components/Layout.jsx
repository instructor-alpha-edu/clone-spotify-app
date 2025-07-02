import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
