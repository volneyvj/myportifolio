const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    subject: String,
});

module.exports = model("Contact", contactSchema);
