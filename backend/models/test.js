const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    name: {type: String, required: true},
    description:{type: String, required: true},
    continent: {type: String},
    image: {data: Object, contentType: String}
})

module.exports = mongoose.model("Test", testSchema);