# Aakash Kumar - MERN Portfolio

A beautiful, fully responsive personal portfolio built with the **MERN stack** (MongoDB, Express, React, Node.js).

## 📁 Project Structure

```
aakash-portfolio/
├── backend/         # Node.js + Express + MongoDB API
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/        # React (Vite) app
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local install OR free MongoDB Atlas account)
- npm or yarn

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
# OR Atlas: mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
TO_EMAIL=akash4112004@gmail.com
```

> **Gmail App Password**: enable 2FA on Gmail → Google Account → Security → App passwords → generate one and paste it as `EMAIL_PASS`.

Start the backend:
```bash
npm run dev
```
Backend runs on `http://localhost:5000`.

### 2. Frontend Setup

Open a **new terminal**:
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.

### 3. Build for Production

```bash
cd frontend && npm run build
```

## ✨ Features
- Hero section with animated intro
- About, Skills, Projects, Certifications, Contact sections
- Smooth scroll navigation
- Beautiful gradient buttons with hover effects
- Contact form that saves to MongoDB + sends email
- Fully responsive (mobile / tablet / desktop)
- Dark modern theme

## 📬 Contact
- Email: akash4112004@gmail.com
- Phone: +91 9560353204
- LinkedIn: https://linkedin.com/in/aakash-kumar-534a97287
