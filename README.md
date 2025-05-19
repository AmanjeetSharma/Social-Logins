# 🌐 Social Logins with Google OAuth2

A modern MERN-based authentication app featuring:
- 🔐 Google OAuth2 login
- 🧭 Protected routes
- 🧑 Dynamic user greeting (Guest / Username)
- 🧳 Session handling with `passport.js` & `cookie-session`

📁 **Project Structure**


Social-Logins/
├── backend/ ⚙️ Express + Passport backend
└── frontend/ Vite + TailwindCSS frontend


---

## 🚀 Features

- ✅ Google OAuth2 login
- 🔒 Protected route (`Demo.jsx`)
- 🧾 Session-based authentication
- 🧠 Display user name or "Guest" in navbar
- 🚪 Logout support

---

## 🛠️ Tech Stack

| Frontend    | Backend         | Auth               | Styling         |
|-------------|------------------|---------------------|-----------------|
| React (Vite) ⚛️ | Express.js 🚂     | Google OAuth2 🔐     | Tailwind CSS 🎨  |
| Axios 📡       | Passport.js 🛂     | cookie-session 🍪     |                 |

---

## 🔧 Environment Variables

Create `.env` files in **both backend & frontend**:

### 🌍 `.env` (in `backend/`)
```env
PORT=5000
CLIENT_URL=http://localhost:5173

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret



💻 Setup Instructions
✅ 1. Clone Repository

git clone https://github.com/AmanjeetSharma/Social-Logins.git
cd Social-Logins




✅ 2. Backend Setup

cd backend
npm install
npm run dev





✅ 3. Frontend Setup

cd frontend
npm install
npm run dev



🛡️ Google OAuth Setup
Go to Google Developer Console

Create a project ➡️ Enable OAuth consent screen

Add authorized redirect URI:http://localhost:5000/auth/google/callback
Add frontend URI:http://localhost:5173


Social-Logins/
├── backend/
│   ├── config/
│   │   └── passport.js
│   ├── .env
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    └── .env



📌 Notes
Sessions are stored using cookie-session (no DB setup required).

Can be extended to include Facebook, GitHub logins.

Easily deployable to Vercel (frontend) and Render (backend)

📫 Contact
Made with ❤️ by Amanjeet Sharma





