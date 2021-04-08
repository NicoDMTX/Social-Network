const express = require('express');
const userRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
require('dotenv').config({path: './config/.env'})
require('./config/db')
const app = express();




// routes
app.use('/api/user', userRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`); 
})
