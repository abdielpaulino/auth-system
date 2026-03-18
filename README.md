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

```
auth-system
│
├── backend
│   ├── node_modules
│   │
│   ├── src
│   │   ├── config
│   │   │   └── database.js
│   │   │
│   │   ├── controllers
│   │   │   └── authController.js
│   │   │
│   │   ├── middlewares
│   │   │   └── registerValidation.js
│   │   │
│   │   ├── models
│   │   │   └── userModel.js
│   │   │
│   │   ├── routes
│   │   │   ├── apiRoutes.js
│   │   │   └── authRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── database
│   │   └── schema.sql
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│
├── .gitignore
└── README.md
```

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

- Register validation
- Password hashing (bcrypt)
- MySQL integration
- User creation in database

## Planned

- Email duplicate validation
- Login system
- JWT authentication
- Security improvements

---

# 🚧 Status

In development.
