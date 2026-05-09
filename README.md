# HackerScope

A full-stack MERN application that scrapes top Hacker News stories and allows authenticated users to bookmark stories.

## Features

- User registration/login with JWT authentication
- Protected bookmark routes
- Hacker News scraping with Cheerio
- Story listing with pagination
- Bookmark management
- Responsive React frontend
- Toast notifications
- Deployment ready

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Axios
- Cheerio

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

### Frontend

```env
VITE_API_URL=
```

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Stories
- GET /api/stories
- GET /api/stories/:id
- POST /api/stories/:id/bookmark

### Scraper
- POST /api/scrape

## Deployment Links

Frontend:
ADD_LINK

Backend:
ADD_LINK
