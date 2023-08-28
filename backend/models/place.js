const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    name: {type: String},
    description: {type: String},
    state: {type: String},
    type: {type: String},
    image: {data: Object, contentType: String},
    country: {type: String}
})

module.exports = mongoose.model("Place", placeSchema);