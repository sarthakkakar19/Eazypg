const express = require("express");
const app = express()
const mongoose =require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb+srv://admin:CgJ17jqlVwo5bvBq@cluster0.vgc6q.mongodb.net/";

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

app.listen(8080, () => {
    console.log("server is listening to port 8080")
});