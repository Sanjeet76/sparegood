const express = require('express');
const {dbConn} = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/user');
require("dotenv").config();

const corsOptions={
    origin:"https://sparegood-1.onrender.com/"
}


const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors(corsOptions));


dbConn();

app.use('/api', userRoutes);


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})