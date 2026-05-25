import { useState } from "react";
import { Input } from "../components/Input";
import { authAPI } from "../services/api";

export function Login({ onNavigate, onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Formato de e-mail inválido.";
    if (!form.password) errs.password = "Senha é obrigatória.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setLoading(true);
    try {
      const data = await authAPI.login(form);
      onLogin(data.user);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration" aria-hidden="true">
        <div className="auth-circle auth-circle--1" />
        <div className="auth-circle auth-circle--2" />
        <div className="auth-circle auth-circle--3" />
      </div>

      <div className="auth-card">
        <div className="auth-card__header">
          <div className="auth-logo" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect
                width="36"
                height="36"
                rx="10"
                fill="currentColor"
                className="auth-logo__bg"
              />
              <path
                d="M18 8a6 6 0 0 1 6 6v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1v-2a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4zm0 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="auth-card__title">Welcome Back</h1>
          <p className="auth-card__subtitle">
            Log in with your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="auth-form">
          {apiError && (
            <div className="auth-alert auth-alert--error" role="alert">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {apiError}
            </div>
          )}

          <Input
            label="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your@email.com"
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Your password"
            autoComplete="current-password"
          />

          <button type="submit" className="btn btn--primary" disabled={loading}>
            {loading ? (
              <span className="btn__spinner" aria-hidden="true" />
            ) : null}
            {loading ? "Entrando..." : "Sign In"}
          </button>
        </form>

        <p className="auth-card__footer">
          Don't have an account?{" "}
          <button className="auth-link" onClick={() => onNavigate("register")}>
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}
