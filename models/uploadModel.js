const mongoose = require('mongoose')

const Upload = new mongoose.Schema({
    link: {
        type: String,
        required: true
    }
})
const uploadModel = mongoose.model('Uploads', Upload)
module.exports = uploadModel;