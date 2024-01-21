const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, "User is required"]},
    name:{type: String, required: [true, "Name is required"]},
    email:{type: String, required: [true, "Email is required"]},
    phone:{type: Number, required: [true, "Phone is required"]}
},{timestamps:true});

module.exports = mongoose.model('Contact', contactSchema);