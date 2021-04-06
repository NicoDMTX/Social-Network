const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.kq0e8.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.log("Failed to connect to mongodb", err));