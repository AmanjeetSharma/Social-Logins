import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import "./config/passport.js"; 

dotenv.config({
    path: "./.env",
});

const app = express();

// Cookie Session Middleware


app.use(
  session({
    secret: process.env.SESSION_SECRET || "yourSecretKeyHere",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);



// CORS config
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// --- AUTH ROUTES ---

// Redirects to Google for login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback URL from Google
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}`,
    session: true,
  }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}`);
  }
);

// Logout
app.get("/logout", (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).send("Logout failed");
    }
    res.redirect(process.env.CLIENT_URL);
  });
});

// Get current user
app.get("/user", (req, res) => {
  res.send(req.user || null);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
