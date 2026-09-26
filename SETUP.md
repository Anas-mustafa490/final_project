# Setup & Installation Instructions

## Prerequisites
- Node.js v18+ and npm
- MongoDB (local install, or a free MongoDB Atlas cluster)
- Git + a GitHub account
- (For deployment) a free Render/Railway account and a free Vercel/Netlify account

---

## 1. Local Setup — Backend

```bash
cd lms-backend
npm install
cp .env.example .env
# edit .env: set MONGO_URI and JWT_SECRET
npm run dev
```
The API runs at `http://localhost:5000`. Check it's alive: `GET http://localhost:5000/api/health`.

### MongoDB URI options
- Local: `mongodb://localhost:27017/lms_db`
- Atlas (free tier): create a cluster at mongodb.com/cloud/atlas → Database Access (create a user) → Network Access (allow 0.0.0.0/0 for dev) → "Connect your application" → copy the connection string into `MONGO_URI`.

---

## 2. Local Setup — Frontend

```bash
cd lms-frontend
npm install
cp .env.example .env
# edit .env: set VITE_API_URL=http://localhost:5000/api
npm run dev
```
The app runs at `http://localhost:5173`.

---

## 3. Creating an Admin User
There's no public "become admin" endpoint (by design — RBAC security). To create one:
1. Register normally as a student or instructor.
2. In MongoDB (Compass, Atlas UI, or `mongosh`), find that user in the `users` collection and change `role` to `"admin"`.

---

## 4. Push to GitHub (two repos, as requested)

```bash
# Backend
cd lms-backend
git init
git add .
git commit -m "Initial commit: LMS backend"
git branch -M main
git remote add origin https://github.com/<your-username>/lms-backend.git
git push -u origin main

# Frontend
cd ../lms-frontend
git init
git add .
git commit -m "Initial commit: LMS frontend"
git branch -M main
git remote add origin https://github.com/<your-username>/lms-frontend.git
git push -u origin main
```
(Create the two empty repos on github.com first, then run the above.)

---

## 5. Deploy the Backend (Render — free tier)
1. Go to render.com → New → Web Service → connect your `lms-backend` GitHub repo.
2. Build command: `npm install`  |  Start command: `npm start`
3. Add environment variables from your `.env` (MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN, CLIENT_URL — set CLIENT_URL to your future frontend URL once deployed).
4. Deploy. You'll get a live URL like `https://lms-backend-xxxx.onrender.com`.

## 6. Deploy the Frontend (Vercel — free tier)
1. Go to vercel.com → New Project → import your `lms-frontend` GitHub repo.
2. Framework preset: Vite.
3. Add environment variable `VITE_API_URL` = `https://lms-backend-xxxx.onrender.com/api` (your Render URL from step 5).
4. Deploy. You'll get a live URL like `https://lms-frontend-xxxx.vercel.app`.
5. Go back to Render and update `CLIENT_URL` to this Vercel URL, then redeploy the backend so CORS allows it.

---

## Troubleshooting
- **CORS errors**: make sure `CLIENT_URL` on the backend matches your deployed frontend URL exactly.
- **401 on every request**: token may be missing/expired — log out and log back in.
- **MongoDB connection refused**: check `MONGO_URI`, and that your Atlas cluster's Network Access allows your IP (or 0.0.0.0/0 for testing).
- **Empty course list**: create a course from the Admin/Instructor panel first — the database starts empty.
