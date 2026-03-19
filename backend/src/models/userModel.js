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

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT id, name, email, password
      FROM users
      WHERE email = ?
      LIMIT 1
    `;

    db.query(sql, [email], (err, results) => {
      if (err) {
        return reject(err);
      }

      resolve(results[0]);
    });
  });
};
