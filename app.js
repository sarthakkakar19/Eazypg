// Declaration of global variables and module importing
require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const { auth } = require("./routes/auth");
const { UserModel } = require("./db");
const listing = require("./jsondata.js");

//Exporting dotenv content
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

//Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

//Middlewares
app.use(express.json());

//Add auth to the required routes
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Route Handlers
app.get("/", (req, res) => {
  res.render("pages/homepage");
});

app.get("/finances", (req, res) => {
  res.sendFile(path.join(__dirname, "public/public/pages/finances.html"));
});

app.get("/roomies", (req, res) => {});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/public/pages/about.html"));
});

app.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "public/public/pages/contact.html"));
});

app.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "public/public/pages/signup/signup.html"));
});

app.post("/signUp", async function (req, res) {
  const { username, password, name } = req.body;

  try {
    await UserModel.create({ username, password, name });
    res.json({ Message: "User Added" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/public/pages/log-in/login.html"));
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: "Incorrect credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.json({
      message: "Welcome!",
      token: token,
    });
  } catch (err) {
    console.error("Error logging user: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running!");
});
