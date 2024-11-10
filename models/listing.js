const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingschema = new schema({
    title : {
        type: String,
        required: true,
    },
    description : String,
    image : {
        filename: { type: String,},
        url: { type: String, },
    },
    price : Number,
    location : String,
    State : String,
});

const listing = mongoose.model("listing", listingschema);
module.exports = listing;