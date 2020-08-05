const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vaishali:vaishali@cluster0.upaji.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})