const express = require("express");
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: "Harsh", email: "harsh@example.com", role: "admin" },
    { id: 2, name: "Ananya", email: "ananya@example.com", role: "user" },
    { id: 3, name: "Rahul", email: "rahul@example.com", role: "user" },
    { id: 4, name: "Priya", email: "priya@example.com", role: "user" },
];

// Logging Middleware
app.use((req, res, next) => {
    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);
    next();
});

// Get All Users
app.get("/users", (req, res) => {
    res.send("List of all users");
});

// Get Single User
app.get("/users/:id", (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// Create User
app.post("/users",(req,res)=>{ 
    const newUser = req.body;
    User.push(newUser);
    res.status(201).json(
        { message: "User created successfully", user: newUser }); 
    });

// Update User
app.put("/users/:id",(req,res)=>{ 
    const userId = req.params.id; 
    const updatedUser = req.body;
    User[userId] = updatedUser; 
    res.json({ message: "User updated successfully", user: updatedUser }); 
});

// Delete User
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({ message: "User deleted successfully" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});