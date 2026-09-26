# WebLearn — MERN Stack Learning Management System

WebLearn is a full-stack LMS built with **MongoDB, Express.js, Next.js (React), and Node.js**. It supports two user roles beyond guests — **Student** and **Instructor/Admin** — with role-based dashboards, course management, video lessons, enrollment, and progress tracking.

## 🔗 Live Demo

| | Link |
|---|---|
| 🌐 **Frontend (App)** | [final-project-43ns.vercel.app](https://final-project-43ns.vercel.app/) |
| ⚙️ **Backend (API)** | [final-project-9se5.onrender.com](https://final-project-9se5.onrender.com/) |

> ⚠️ The backend runs on Render's free tier, which spins down after periods of inactivity. The **first** request after idle time can take 30–60 seconds to respond while the server wakes up — this is normal.

## Project Structure

```
final_project/
├── backend/     # Express + MongoDB REST API
└── frontend/    # Next.js (React) client
```

## Core Features

**Frontend**
- Registration & Login (student / instructor)
- Student Dashboard — enrolled courses & progress
- Admin/Instructor Dashboard — create/manage courses
- Course listing with search & filtering (category, level)
- Course details page with lesson list
- Enrollment flow
- Video lesson player with "mark complete"
- Progress bar per course
- User profile editing
- Responsive Tailwind UI

**Backend**
- JWT authentication & authorization
- Role-based access control (student / instructor / admin)
- Course CRUD (instructor/admin only, ownership-checked)
- Lesson management nested under courses
- Enrollment + progress tracking endpoints
- Centralized error handling & input validation (express-validator)
- MongoDB via Mongoose, with text-search index on courses
- Security middleware: Helmet, CORS allow-list, rate limiting

## Tech Stack

**Frontend:** Next.js 15 · React 19 · Tailwind CSS 4 · Axios · Lucide Icons
**Backend:** Node.js · Express 5 · MongoDB · Mongoose · JWT · bcryptjs · Multer · Cloudinary
**Deployment:** Vercel (frontend) · Render (backend) · MongoDB Atlas (database)

## Getting Started Locally

### Backend
```bash
cd backend
npm install
cp .env.example .env   # set MONGO_URI, JWT_SECRET, CLIENT_URL
npm run dev
```
API runs at `http://localhost:5000` — check `GET /api/health` (or `/`) to confirm it's alive.

### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL
npm run dev
```
App runs at `http://localhost:3000`.

## Environment Variables

**Backend (`backend/.env`)**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=https://final-project-43ns.vercel.app
```

**Frontend (`frontend/.env.local`)**
```
NEXT_PUBLIC_API_URL=https://final-project-9se5.onrender.com/api
```

## Documentation
- `SETUP.md` — installation & run instructions (local + deployment)
- `API_DOCS.md` — full REST API reference

## Design Reference
UI structure follows the layout patterns of this Figma LMS template:
https://www.figma.com/design/qQNyD0nU56mpvYEso5zj2h/Education-or-Online-education-online-courses-or-elearning-or-lms-figma-template-3

## Deployment Notes
- **Frontend** is deployed on Vercel with Root Directory set to `frontend`.
- **Backend** is deployed on Render as a Node web service, with `CLIENT_URL` set to the deployed Vercel origin so CORS allows requests from the live frontend.
- If you fork/redeploy this project under new URLs, remember to update `CLIENT_URL` on the backend and `NEXT_PUBLIC_API_URL` on the frontend to match your own deployment addresses.
