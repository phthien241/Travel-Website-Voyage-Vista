const mongoose = require("mongoose");

const informationSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true}
})

module.exports = mongoose.model("Information", informationSchema);