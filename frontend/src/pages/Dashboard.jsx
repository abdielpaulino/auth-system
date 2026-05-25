export function Dashboard({ user, onLogout }) {
  const initials = user?.name
    ? user.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0].toUpperCase())
        .join("")
    : "?";

  return (
    <div className="auth-page">
      <div className="auth-decoration" aria-hidden="true">
        <div className="auth-circle auth-circle--1" />
        <div className="auth-circle auth-circle--2" />
        <div className="auth-circle auth-circle--3" />
      </div>

      <div className="auth-card dashboard-card">
        <div className="dashboard-avatar" aria-hidden="true">
          {initials}
        </div>
        <h1 className="auth-card__title">
          Hello, {user?.name?.split(" ")[0]}!
        </h1>
        <p className="auth-card__subtitle">
          You have been successfully authenticated.
        </p>

        <div className="dashboard-info">
          <div className="dashboard-info__row">
            <span className="dashboard-info__label">Name</span>
            <span className="dashboard-info__value">{user?.name}</span>
          </div>
          <div className="dashboard-info__row">
            <span className="dashboard-info__label">E-mail</span>
            <span className="dashboard-info__value">{user?.email}</span>
          </div>
          <div className="dashboard-info__row">
            <span className="dashboard-info__label">ID</span>
            <span className="dashboard-info__value">#{user?.id}</span>
          </div>
        </div>

        <button className="btn btn--outline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
