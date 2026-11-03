# Aasia's Portfolio — MERN Stack Developer

A responsive, single-page personal portfolio that presents who I am, what I build, and how to reach me. The frontend is built with **React** and **Tailwind CSS**, and the **Node.js / Express / MongoDB** backend powers a contact form that stores every message in the database and forwards it to my inbox by email.

**Live site:** [aasia.vercel.app](https://aasia.vercel.app)

---

## Table of Contents

1. [About the App](#about-the-app)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [API Reference](#api-reference)
6. [Deployment](#deployment)
7. [About Me](#about-me)
8. [Expertise and Skillset](#expertise-and-skillset)
9. [Knowledge Areas](#knowledge-areas)
10. [Experience](#experience)
11. [Featured Projects](#featured-projects)
12. [Education and Certifications](#education-and-certifications)
13. [Contact](#contact)

---

## About the App

This portfolio is a full-stack MERN application. Visitors can learn about me, browse my projects with live demos and source code, and send me a message directly from the page.

### Features

- **Home** – hero section with my name, role and a call-to-action.
- **About** – short bio with the technology stack shown as logos (HTML, CSS, JavaScript, Tailwind CSS, MongoDB, Express.js, React.js, Node.js, Firebase).
- **Projects** – cards for each project with the tech used, a GitHub link and a live-demo link.
- **Contact** – validated form (name, email, message). Each submission is saved to MongoDB and emailed to me through Nodemailer.
- **Responsive navigation** – top navbar on desktop and a hamburger menu that opens a sidebar on small screens, with anchor links to each section.
- **Footer** – quick links plus LinkedIn and GitHub.
- **Clean UI** – Space Grotesk typography, Font Awesome icons and a consistent pink accent colour theme.

### How it works

```
Browser (React)  ──POST /api/contact──▶  Express API  ──▶  MongoDB (saves message)
                                                      └──▶  Gmail via Nodemailer (emails me)
```

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 19, React Router 7, Tailwind CSS 3, HTML5, CSS3, JavaScript (ES6+), Axios, Font Awesome, Create React App (`react-scripts` 5) |
| **Backend** | Node.js, Express 4, Mongoose 8, Nodemailer, CORS, dotenv |
| **Database** | MongoDB (Atlas or local) |
| **Hosting** | Vercel (frontend), Render (backend) |
| **Tools** | Git, GitHub, VS Code, Postman |

---

## Project Structure

```
my-personal-portfolio/
├── backend/
│   ├── index.js              # Express server, Mongoose model, /api/contact route, Nodemailer
│   ├── package.json
│   └── .env                  # secrets (git-ignored, create it yourself)
└── frontend/
    ├── public/
    │   └── index.html        # fonts, Font Awesome, page title
    ├── src/
    │   ├── assets/           # tech logos, project screenshots, CV (PDF)
    │   ├── components/
    │   │   ├── home/         # hero section
    │   │   ├── about/        # bio + tech logos
    │   │   ├── project/      # project cards
    │   │   ├── contact/      # contact form (Axios → backend)
    │   │   ├── hireme/       # CV view / download page
    │   │   └── common/       # Navbar, Sidebar (+ context), Footer
    │   ├── App.js            # page layout
    │   ├── MainApp.js        # route-based layout (/ and /hireme)
    │   └── index.js          # React entry point with BrowserRouter
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

**Repositories:** the frontend and backend each have their own repo as well as this combined one.

- Combined: [my-personal-portfolio](https://github.com/Aasiacoder/my-personal-portfolio)
- Frontend: [my-mernportfolio-app-frontend](https://github.com/Aasiacoder/my-mernportfolio-app-frontend)
- Backend: [my-mernportfolio-backend](https://github.com/Aasiacoder/my-mernportfolio-backend)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer (includes npm)
- A MongoDB database ([MongoDB Atlas](https://www.mongodb.com/atlas) free tier works well)
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) (needed so Nodemailer can send email)

### 1. Get the code

```bash
git clone https://github.com/Aasiacoder/my-personal-portfolio.git
cd my-personal-portfolio
```

### 2. Run the backend

```bash
cd backend
npm install
```

Create a file named `.env` inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
EMAIL=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_RECIPIENT=the-address-that-receives-messages@example.com
```

Start the server:

```bash
npm start
```

You should see `DB Success` and `Server running at 5000` in the terminal.

> `.env` is listed in `.gitignore`, so your credentials are never committed. Never share this file.

### 3. Run the frontend

Open a **second terminal**:

```bash
cd frontend
npm install
npm start
```

The app opens at **http://localhost:3000**.

By default the contact form posts to the deployed Render backend. To test against your local backend, change the URL in `frontend/src/components/contact/Contact.jsx` to:

```js
http://localhost:5000/api/contact
```

### 4. Create a production build

```bash
cd frontend
npm run build
```

The optimised static files are generated in `frontend/build/`.

### Available scripts

| Folder | Command | What it does |
| --- | --- | --- |
| `frontend` | `npm start` | Starts the dev server on port 3000 with hot reload |
| `frontend` | `npm run build` | Creates the production build |
| `frontend` | `npm test` | Runs tests in watch mode |
| `backend` | `npm start` | Starts the Express server (`node index.js`) |

### Troubleshooting

| Problem | Fix |
| --- | --- |
| `DB failed` in the backend terminal | Check `MONGO_URI`, and that your IP is allowed in MongoDB Atlas Network Access |
| Emails are not arriving | Use a Gmail **App Password** (not your normal password) and confirm `EMAIL_RECIPIENT` is set |
| Port already in use | Change `PORT` in `.env`, or stop the process using it |
| Form works locally but not in production | Make sure the environment variables are also added in your hosting dashboard |

---

## API Reference

### `POST /api/contact`

Saves a contact message to MongoDB and emails it to the configured recipient.

**Request body (JSON)**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hi Aasia, I'd like to talk about an opportunity."
}
```

**Response**

- `200 OK` – message saved and email sent.
- `500` – saving to the database or sending the email failed (details are logged on the server).

---

## Deployment

| Part | Platform | Settings |
| --- | --- | --- |
| Frontend | **Vercel** | Root directory `frontend`, build command `npm run build`, output directory `build` |
| Backend | **Render** | Root directory `backend`, build command `npm install`, start command `npm start`, add the `.env` values as environment variables |

---

## About Me

I'm **Aasia A**, a MERN Full Stack Developer from Chennai, India, with a Computer Science degree. I build responsive web applications with React on the front end and Node.js, Express and MongoDB on the back end. I enjoy turning designs into clean, reusable components, wiring them to well-structured REST APIs, and shipping the result to the web. I'm actively looking for a Full Stack or Front-End Developer role where I can contribute to real-world software and keep growing.

---

## Expertise and Skillset

### Core stack (used in my projects)

| Area | Skills |
| --- | --- |
| **Languages** | JavaScript (ES6+), HTML5, CSS3 |
| **Frontend** | React.js (Hooks, Context API, React Router), Tailwind CSS, Flexbox, responsive UI, reusable components |
| **Backend** | Node.js, Express.js, RESTful APIs, CRUD operations, Axios, Nodemailer |
| **Database** | MongoDB with Mongoose |
| **Tools and deployment** | Git, GitHub, Postman, VS Code, Vercel, Render |

### Working knowledge

| Area | Skills |
| --- | --- |
| **Backend as a service** | Supabase (PostgreSQL, authentication), Firebase (real-time data, user authentication) |
| **File and data handling** | Excel parsing with `xlsx`, bulk email workflows |

### Foundational

| Area | Skills |
| --- | --- |
| **Languages** | Java, SQL (basic queries) |
| **Database** | MySQL (basic queries, CRUD) |
| **IDE** | IntelliJ IDEA |

### Professional strengths

Communication · Analytical thinking · Problem-solving · Debugging · Attention to detail · Data validation · Technical documentation · Willingness to learn

---

## Knowledge Areas

- **Component-based architecture** – breaking UIs into small, reusable React components with clean props and state flow.
- **State management** – `useState` and Context API (for example, the sidebar state in this portfolio).
- **Routing** – client-side routing with React Router.
- **REST API design** – routes, request validation, structured error handling and frontend–backend integration with Axios.
- **Database modelling** – schemas and models with Mongoose; relational basics with SQL/MySQL and PostgreSQL through Supabase.
- **Authentication basics** – email and password sign-in flows with Firebase and Supabase.
- **Responsive design** – mobile-first layouts using Flexbox and Tailwind utilities.
- **Security hygiene** – keeping secrets in environment variables, configuring CORS, never committing credentials.
- **Debugging and API troubleshooting** – browser DevTools, Postman, server logs.
- **Version control and deployment** – Git/GitHub workflow, deploying frontends to Vercel and backends to Render.

---

## Experience

### Intern — Startup (current)

- Building a loan annexure sheet web application: **React.js** frontend with HTML and CSS, and a standalone **Supabase** backend (PostgreSQL).
- Designed and created the database tables with SQL scripts, kept in version-controlled migration files.
- Implemented email and password **authentication** (sign in, sign up, forgot password) with user profiles, plus an admin-controlled flow for registering new users.
- Delivered features incrementally, reporting progress to a senior engineer and applying review feedback with small, focused commits.

### Independent projects (2024 – present)

- Built and deployed MERN and React applications end to end, from UI to API to database to hosting. See [Featured Projects](#featured-projects).

---

## Featured Projects

| Project | Description | Tech | Links |
| --- | --- | --- | --- |
| **BulkMail** | Full-stack app for Excel-based bulk email processing, with request validation, structured error handling and automated email workflows. | React, Node.js, Express, MongoDB, Axios, `xlsx`, Nodemailer | Deployed on Vercel and Render |
| **Udemy Replica** | Responsive e-learning platform clone with course listing, navigation and dynamic rendering. | HTML, CSS, Tailwind CSS, React | [Code](https://github.com/Aasiacoder/UdemyClone-react) · [Live](https://udemy-clone-react-omega.vercel.app/) |
| **Weather App** | Interactive weather app showing real-time data from an API. | HTML, Tailwind CSS, React, Axios | [Code](https://github.com/Aasiacoder/Weather-App-react) · [Live](https://weather-app-react-puce-rho.vercel.app/) |
| **To-Do List App** | Simple and secure task manager. | HTML, Tailwind CSS, React | [Code](https://github.com/Aasiacoder/Actodo-List-react) · [Live](https://actodo-list-react-black.vercel.app/) |
| **Nostra Clone** | Feature-rich product filtering system. | HTML, CSS, JavaScript | [Code](https://github.com/Aasiacoder/Nostra-Website-clone) · [Live](https://aasiacoder.github.io/Nostra-Website-clone/) |
| **This Portfolio** | MERN portfolio with a contact form that saves to MongoDB and emails me. | React, Tailwind CSS, Node.js, Express, MongoDB, Nodemailer | You are here |

---

## Education and Certifications

**Education**

- **B.Sc. Computer Science** — Annai Therasa Arts & Science College, University of Madras, Chennai (Oct 2021 – May 2024)

**Certifications**

- **MERN Full Stack Development** — Error Makes Clever Academy (Sep 2024): HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Postman, Git and GitHub
- **Introduction to Soft Skills** — TCS iON (Nov 2024): professional development and communication

---

## Contact

I'm open to Full Stack and Front-End Developer opportunities.

- **Email:** [aasia3017@gmail.com](mailto:aasia3017@gmail.com)
- **LinkedIn:** [linkedin.com/in/aasiaa](https://www.linkedin.com/in/aasiaa)
- **GitHub:** [github.com/Aasiacoder](https://github.com/Aasiacoder)
- **Portfolio:** [aasia.vercel.app](https://aasia.vercel.app)

---

© 2025 Aasia · All rights reserved
