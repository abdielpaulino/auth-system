import otenv from "dotenv";
configDotenv.config();

import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
