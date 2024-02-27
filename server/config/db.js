const mongoose = require('mongoose');
require("dotenv").config();



exports.dbConn = () => {
    const dbURL = (process.env.MONGODB_URI);
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
        console.log('DB Cnnted')
    }).catch((err) => console.log(err));
}