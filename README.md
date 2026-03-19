# Auth System

Authentication system built for learning **full stack development**.

The goal of this project is to understand how modern authentication systems work using a **Node.js backend** and a **React frontend**.

---

# 🚀 Technologies

## Backend

- Node.js
- Express
- MySQL
- bcrypt
- REST API

## Frontend (planned)

- React

## Tools

- Git
- GitHub
- Thunder Client

---

# 📁 Project Structure

auth-system
│
├── backend
│ ├── node_modules
│ │
│ ├── src
│ │ ├── config
│ │ │ └── database.js
│ │ │
│ │ ├── controllers
│ │ │ └── authController.js
│ │ │
│ │ ├── middlewares
│ │ │ └── registerValidation.js
│ │ │
│ │ ├── models
│ │ │ └── userModel.js
│ │ │
│ │ ├── routes
│ │ │ ├── apiRoutes.js
│ │ │ └── authRoutes.js
│ │ │
│ │ └── server.js
│ │
│ ├── database
│ │ └── schema.sql
│ │
│ ├── .env
│ ├── .env.example
│ ├── package.json
│ └── package-lock.json
│
├── frontend
│
├── .gitignore
└── README.md

---

# 🔑 API Routes

## Test

GET `/api`

---

## Auth

POST `/api/auth/register`

POST `/api/auth/login`

---

# 📌 Features

## Implemented

- Register validation middleware
- Input sanitization (trim, lowercase)
- Strong password validation:
  - 8 to 20 characters
  - Uppercase, lowercase, number and symbol
  - Password confirmation
  - Sequence prevention (e.g. "123", "abc")
- Password hashing with bcrypt
- MySQL integration
- User creation in database
- Duplicate email validation (409 Conflict)

## Planned

- Login system with bcrypt.compare()
- JWT authentication
- Protected routes
- Better error handling
- Security improvements

---

# 🚧 Status

In development.
