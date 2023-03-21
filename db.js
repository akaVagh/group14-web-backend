const mongoose = require("mongoose");

mongoose.
connect('mongodb+srv://aakashgupta7:helloworld@cluster0.qoiuiqq.mongodb.net/Cruise_Tour?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

module.exports = mongoose;
