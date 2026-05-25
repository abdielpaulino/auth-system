import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const { user, login, logout } = useAuth();
  const [page, setPage] = useState("login");

  if (user) {
    return <Dashboard user={user} onLogout={logout} />;
  }

  return page === "login" ? (
    <Login onNavigate={setPage} onLogin={login} />
  ) : (
    <Register onNavigate={setPage} />
  );
}
