import { useState } from "react";
import { Input } from "../components/Input";
import { authAPI } from "../services/api";

export function Register({ onNavigate }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const hasSequence = (text) => {
    const lower = text.toLowerCase();
    const seqs = ["0123456789", "abcdefghijklmnopqrstuvwxyz"];
    for (const seq of seqs) {
      for (let i = 0; i <= seq.length - 3; i++) {
        if (lower.includes(seq.slice(i, i + 3))) return true;
      }
    }
    return false;
  };

  const validate = () => {
    const errs = {};
    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();

    if (!name) errs.name = "Name is required.";
    else if (name.length < 3 || name.length > 50)
      errs.name = "Name must be between 3 and 50 characters.";
    else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(name))
      errs.name = "Name must contain only letters.";

    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email format.";
    else if (email.length > 100) errs.email = "Email is too long.";

    const pw = form.password.trim();
    if (!pw) errs.password = "Password is required.";
    else if (pw.length < 8 || pw.length > 20)
      errs.password = "Password must be between 8 and 20 characters.";
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/.test(pw))
      errs.password =
        "Password must contain uppercase and lowercase letters, a number, and a symbol.";
    else if (hasSequence(pw))
      errs.password = "Password cannot contain sequences like 123 or abc.";

    if (!form.passwordConfirm) errs.passwordConfirm = "Confirm your password.";
    else if (form.passwordConfirm.trim() !== pw)
      errs.passwordConfirm = "Passwords do not match.";

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
      await authAPI.register({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password.trim(),
        passwordConfirm: form.passwordConfirm.trim(),
      });
      setSuccess(true);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-decoration" aria-hidden="true">
          <div className="auth-circle auth-circle--1" />
          <div className="auth-circle auth-circle--2" />
          <div className="auth-circle auth-circle--3" />
        </div>
        <div className="auth-card auth-card--success">
          <div className="success-icon" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="auth-card__title">Account created!</h2>
          <p className="auth-card__subtitle">
            Your account has been successfully created. You can now sign in.
          </p>
          <button
            className="btn btn--primary"
            onClick={() => onNavigate("login")}
          >
            Go to login
          </button>
        </div>
      </div>
    );
  }

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
          <h1 className="auth-card__title">Create account</h1>
          <p className="auth-card__subtitle">Fill in your details to sign up</p>
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
            label="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your full name"
            autoComplete="name"
          />
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
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
          />
          <Input
            label="Confirm your password"
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            error={errors.passwordConfirm}
            placeholder="Repeat the password"
            autoComplete="new-password"
          />

          <button type="submit" className="btn btn--primary" disabled={loading}>
            {loading ? (
              <span className="btn__spinner" aria-hidden="true" />
            ) : null}
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="auth-card__footer">
          Already have an account?{" "}
          <button className="auth-link" onClick={() => onNavigate("login")}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
