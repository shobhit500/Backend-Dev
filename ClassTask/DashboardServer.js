const express = require("express");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

// Predefined users list
const users = [
  { id: 1, email: "admin@gmail.com", password: "1234" },
  { id: 2, email: "user@gmail.com", password: "abcd" }
];

// Store valid tokens
const validTokens = [];

// 🔐 LOGIN ROUTE
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check user
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate dummy token
  const token = "token_" + Math.random().toString(36).substring(2);

  // Save token
  validTokens.push(token);

  res.json({
    message: "Login successful",
    token: token
  });
});

// Protected Routes
app.get("/dashboard", authMiddleware(validTokens), (req, res) => {
  res.json({ message: "Welcome to Dashboard 🎯" });
});

app.get("/profile", authMiddleware(validTokens), (req, res) => {
  res.json({ message: "This is your Profile 👤" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
