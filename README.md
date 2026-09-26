# WebLearn — MERN Stack Learning Management System

WebLearn is a full-stack LMS built with **MongoDB, Express.js, React.js, and Node.js**. It supports two user roles beyond guests — **Student** and **Instructor/Admin** — with role-based dashboards, course management, video lessons, enrollment, and progress tracking.

Theme note: this build uses a red/blue "web-slinger" color palette and subtle web-pattern background to match the requested look, without using any copyrighted Marvel/Spider-Man artwork or characters.

## Project Structure

```
lms-project/
├── lms-backend/     # Express + MongoDB REST API
└── lms-frontend/    # React (Vite) client
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

## Tech Stack
MongoDB · Express.js · React.js (Vite) · Node.js · JWT · Tailwind CSS · Mongoose · Axios · React Router

## Documentation
- `SETUP.md` — installation & run instructions (local + deployment)
- `API_DOCS.md` — full REST API reference

## Design Reference
UI structure follows the layout patterns of this Figma LMS template:
https://www.figma.com/design/qQNyD0nU56mpvYEso5zj2h/Education-or-Online-education-online-courses-or-elearning-or-lms-figma-template-3

## What's included vs. what you need to do
This package gives you complete, working source code for both frontend and backend. Three items from your checklist require actions on *your* accounts (they can't be generated for you):
1. **GitHub repository** — push these two folders as repos (steps in SETUP.md)
2. **Live frontend deployment** — deploy `lms-frontend` (e.g., Vercel/Netlify)
3. **Live backend/API deployment** — deploy `lms-backend` (e.g., Render/Railway) + a MongoDB Atlas cluster

SETUP.md walks through all of this step by step.
