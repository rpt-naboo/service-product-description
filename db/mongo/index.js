require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully hooked into mongoose');


  
});
