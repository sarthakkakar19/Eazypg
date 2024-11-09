// Declaration of global variables and module importing
require('dotenv').config();
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "";

main().then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL)
};

app.set("view enine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req, res) =>{
    res.render("./pages/homepage.ejs")
});

//Route handlers
app.post("/signUp", async function(req, res) {
    const { username, password, name } = req.body;
    
    try {
        await UserModel.create({ username, password, name });
        res.json({ Message: "User Added" });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to add user" });
    }
});



app.listen(3000, () => {
    console.log("Server is running!");
})