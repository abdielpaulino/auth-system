import { db } from "../config/database.js";

export const createUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, password], (err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result);
    });
  });
};
