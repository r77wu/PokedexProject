const express = require('express');
const userRoute = require('./routes/userRoute');
const app = express();



app.get('/', (req, res) => {
  res.send('Welcome to the backend');
})

app.use('/api/v1/users', userRoute);



module.exports = app;