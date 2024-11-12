const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}, { collection: 'Users' }); 

const pgSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, { collection: 'PG' });

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    },
    pgName: {
        type: String,
        required: true, 
    },
    pgLocation: {
        type: String,
        required: true,
    },
}, { collection: 'admin' });


const AdminModel = mongoose.model('Admin', AdminSchema);
const PGModel = mongoose.model('PG', pgSchema);
const UserModel = mongoose.model("Users", userSchema);

module.exports = {
    UserModel,
    AdminModel,
    PGModel
}