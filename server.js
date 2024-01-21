const express = require('express');
const { connectDB } = require('./config/dbConnection');
const { errorHandler } = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

connectDB();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoute'));
app.use(errorHandler);


app.listen(port, ()=> {
  console.log('listening on port ' + port);
});
