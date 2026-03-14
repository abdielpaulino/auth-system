# Auth System

Authentication system built for learning **full stack development**.

The goal of this project is to understand how modern authentication systems work using a **Node.js backend** and a **React frontend**.

This project is part of my studies in software development.

---

## 🚀 Technologies

### Backend

- Node.js
- Express
- REST API

### Frontend (planned)

- React

### Tools

- Git
- GitHub
- Thunder Client (API testing)

---

## 📁 Project Structure

```
auth-system
│
├── backend
│ └── src
│ │
│ ├── controllers
│ │ └── authController.js
│ │
│ ├── middlewares
│ │ └── loginValidation.js
│ │ └── registerValidation.js
│ │
│ ├── routes
│ │ ├── apiRoutes.js
│ │ └── authRoutes.js
│ │
│ ├── app.js
│ └── server.js
│
├── frontend
│
├── .gitignore
└── README.md
```

---

---

## 🔑 API Routes

### Test Route

GET `/api`

Returns a simple message to confirm the API is running.

---

### Auth Routes

POST `/api/auth/register`  
Register a new user.

POST `/api/auth/login`  
Authenticate a user.

---

## ✅ Current Features

- API structure using Express
- Modular architecture (controllers, routes, middlewares)
- User registration validation
- Input sanitization and validation middleware

---

## 📌 Features (Planned)

- User registration with database
- User login
- Password hashing
- JWT authentication
- Login blocking after failed attempts
- Reports
- Google authentication
- Camera integration
- Address autofill using CEP API

---

## 📚 Learning Goals

This project was created to practice:

- Backend architecture
- REST API development
- Authentication systems
- Database integration
- Frontend integration with React

---

## 🚧 Status

Project in development.
