const express = require('express');

const connectDB = require('./config/database');

const router = require('./router/router');

const app = express();

connectDB();

app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    connectDB();
    console.log("server is runnin http://localhost:8080");
});