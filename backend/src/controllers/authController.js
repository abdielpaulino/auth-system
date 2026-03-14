/* Register----------------------------------------------------*/
export const registerUser = (req, res) => {
  const { name, email } = req.body;

  res.json({
    message: "User successfully registered.",
    name,
    email,
  });
};

/* Login-------------------------------------------------------*/
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "User successfully logged in.",
    email,
  });
};
