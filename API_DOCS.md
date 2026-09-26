# API Documentation

Base URL (local): `http://localhost:5000/api`
Auth: send `Authorization: Bearer <token>` header for protected routes.
All responses: `{ success: boolean, data?, message?, errors? }`

## Auth
| Method | Endpoint | Access | Body | Description |
|---|---|---|---|---|
| POST | /auth/register | Public | `{ name, email, password, role? }` | role is `student` or `instructor` |
| POST | /auth/login | Public | `{ email, password }` | Returns JWT |
| GET | /auth/me | Private | — | Current user profile |

## Users
| Method | Endpoint | Access | Body | Description |
|---|---|---|---|---|
| GET | /users | Admin | — | List all users |
| PUT | /users/profile | Private | `{ name?, bio?, avatar? }` | Update own profile |
| DELETE | /users/:id | Admin | — | Remove a user |

## Courses
| Method | Endpoint | Access | Body / Query | Description |
|---|---|---|---|---|
| GET | /courses | Public | `?search=&category=&level=&page=&limit=` | List/search/filter courses (paginated) |
| GET | /courses/:id | Public | — | Course details incl. lessons |
| POST | /courses | Instructor/Admin | `{ title, description, category, level, price, thumbnail }` | Create course |
| PUT | /courses/:id | Owner Instructor/Admin | any course field | Update course |
| DELETE | /courses/:id | Owner Instructor/Admin | — | Delete course (+ its lessons & enrollments) |

## Lessons (nested under a course)
| Method | Endpoint | Access | Body | Description |
|---|---|---|---|---|
| GET | /courses/:courseId/lessons | Public | — | List lessons for a course |
| POST | /courses/:courseId/lessons | Owner Instructor/Admin | `{ title, videoUrl, content, duration, order }` | Add lesson |
| PUT | /lessons/:id | Instructor/Admin | any lesson field | Update lesson |
| DELETE | /lessons/:id | Instructor/Admin | — | Delete lesson |

## Enrollments
| Method | Endpoint | Access | Body | Description |
|---|---|---|---|---|
| POST | /enrollments/:courseId | Student | — | Enroll in a course |
| GET | /enrollments/my | Student | — | List my enrollments + progress |
| PUT | /enrollments/:courseId/progress | Student | `{ lessonId }` | Mark a lesson complete, recalculates % |
| GET | /enrollments/course/:courseId | Instructor/Admin | — | List students enrolled in a course |

## Error Format
```json
{ "success": false, "message": "Invalid email or password" }
```
Validation errors:
```json
{ "success": false, "errors": [ { "msg": "Valid email required", "path": "email" } ] }
```

## Example: Register + Create Course
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","password":"secret123","role":"instructor"}'

curl -X POST http://localhost:5000/api/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token-from-register-response>" \
  -d '{"title":"Intro to Node.js","description":"Learn backend basics","category":"Web Development","level":"Beginner","price":0}'
```
