const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Profile = mongoose.model('profile', ProfileSchema);
// User.createIndexes();
module.exports = Profile;