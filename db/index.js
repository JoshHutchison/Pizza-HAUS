const mongoose = require('mongoose')
mongoose
.connect('mongodb+srv://joshhutchison:' + process.env.PASSWORD + '@cluster0.tanblky.mongodb.net/mernPizzaHaus?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
const db = mongoose.connection
module.exports = db