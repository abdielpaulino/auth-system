export const validateRegister = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      error: "Request body is required.",
    });
  }

  let { name, email, password, passwordConfirm } = req.body;

  /* Validate Registration Fields--------------------------------*/
  if (!name || !email || !password || !passwordConfirm) {
    return res.status(400).json({
      error: "All fields are required.",
    });
  }

  /* Name Validation---------------------------------------------*/
  name = name.trim();

  if (name.length < 3 || name.length > 50) {
    return res.status(400).json({
      error: "Name must be between 3 and 50 characters.",
    });
  }

  const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;

  if (!nameRegex.test(name)) {
    return res.status(400).json({
      error: "Name can only contain letters and spaces.",
    });
  }

  name = name.replace(/\s+/g, " ");

  /* Email Validation---------------------------------------------*/
  email = email.trim().toLowerCase();

  if (email.length > 100) {
    return res.status(400).json({
      error: "Email is too long.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Invalid email format.",
    });
  }

  /* Password Validation------------------------------------------*/
  password = password.trim();
  passwordConfirm = passwordConfirm.trim();

  if (password.length < 6 || password.length > 15) {
    return res.status(400).json({
      error: "Password must be between 6 and 15 characters.",
    });
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,15}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error: "Password must contain uppercase, lowercase, number and symbol.",
    });
  }

  if (passwordConfirm !== password) {
    return res.status(400).json({
      error: "Passwords do not match.",
    });
  }

  /* Data forwarding----------------------------------------------*/
  req.body = { name, email, password };

  next();
};
