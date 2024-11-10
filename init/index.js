const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require('../models/listing.js');

const MONGO_URL = "mongodb+srv://admin:CgJ17jqlVwo5bvBq@cluster0.vgc6q.mongodb.net/EazyPG";

main().then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL)
};

const initDB = async () => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();