require('dotenv').config();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully hooked into mongoose');  
});

let descriptionSchema = mongoose.Schema({
  productId: Number,
  size: String,
  color: String,
  details: String,
  packagingTypeId: Number,
  productImageUrl: String,
});

let Description = mongoose.model('Description', descriptionSchema);

let packagingTypeSchema = mongoose.Schema({
  label: String,
});

let PackagingType = mongoose.model('PackagingType', packagingTypeSchema);

module.exports.db = db;
module.exports.Description = Description;
module.exports.PackagingType = PackagingType;
