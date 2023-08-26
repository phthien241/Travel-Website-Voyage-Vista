const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    state: {type: String, required: true},
    type: {type: String},
    imagePath: {type: String},
    country: {type: String}
})

module.exports = mongoose.model("Place", placeSchema);