# Auth System

Authentication system built for learning **full stack development**.

The goal of this project is to understand how modern authentication systems work using a **Node.js backend** and a **React frontend**.

This project is part of my studies in **software development**.

---

# 🚀 Technologies

## Backend

- Node.js
- Express
- MySQL
- REST API

## Frontend (planned)

- React

## Tools

- Git
- GitHub
- Thunder Client (API testing)

---

# 📁 Project Structure

```
auth-system
│
├── backend
│   │
│   ├── database
│   │   └── schema.sql
│   │
│   ├── node_modules
│   │
│   ├── src
│   │   │
│   │   ├── config
│   │   │   └── database.js
│   │   │
│   │   ├── controllers
│   │   │   └── authController.js
│   │   │
│   │   ├── middlewares
│   │   │   ├── loginValidation.js
│   │   │   └── registerValidation.js
│   │   │
│   │   ├── models
│   │   │   └── userModel.js
│   │   │
│   │   ├── routes
│   │   │   ├── apiRoutes.js
│   │   │   └── authRoutes.js
│   │   │
│   │   ├── app.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── .env.example
│   ├── package-lock.json
│   └── package.json
│
├── frontend
│
├── .gitignore
└── README.md
```

---

# 🔑 API Routes

## Test Route

GET `/api`

Returns a message confirming the API is working.

---

## Auth Routes

POST `/api/auth/register`

Register a new user.

POST `/api/auth/login`

Authenticate a user.

---

# 📌 Features

## Implemented

- User registration validation
- Name validation
- Email validation
- Password validation
- MySQL database connection
- User model for database interaction

## Planned

- Password hashing
- Login authentication
- JWT authentication
- Login blocking after failed attempts
- Reports
- Google authentication
- Camera integration
- Address autofill using CEP API

---

# 📚 Learning Goals

This project was created to practice:

- Backend architecture
- REST API development
- Authentication systems
- Database integration
- Frontend integration with React

---

# 🚧 Status

Project in development.
