const mongoose = require('mongoose');

// Replace <database_name> with the name of your MongoDB database
const uri = 'mongodb://0.0.0.0:27017/Abhi_Mern';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });
