const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Student Data
let students = [
  { id: 1, name: "Harsh", marks: 85, grade: "A" },
  { id: 2, name: "Rahul", marks: 45, grade: "C" },
  { id: 3, name: "Anjali", marks: 30, grade: "D" }
];

// GET /students → All Students
app.get("/students", (req, res) => {
  res.render("students", { students });
});

// GET /students/:id → Single Student
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.send("Student Not Found");
  }

  res.render("student", { student });
});

// GET Add Form
app.get("/add-student", (req, res) => {
  res.render("addStudent");
});

// POST Add Student
app.post("/add-student", (req, res) => {
  const { name, marks, grade } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    marks: parseInt(marks),
    grade
  };

  students.push(newStudent);

  res.redirect("/students");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
