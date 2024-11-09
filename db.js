const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: String,
    password: String,
    name: String
}, { collection: 'Users' }); 

const PGSchema = new Schema({
    location: String,
    amenities: [String],
    price: Number
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
const PGModel = mongoose.model('PG', PGSchema);
const UserModel = mongoose.model("Users", User);

module.exports = {
    UserModel,
    AdminModel,
    PGModel
}