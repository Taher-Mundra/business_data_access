const mongoose = require('mongoose')

const FeedbackSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'Please enter the userID']
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model('Feedback',FeedbackSchema);