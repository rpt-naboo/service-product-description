console.log('currently in', __dirname);

const { db, PackagingType, Description } = require('./index');
const faker = require('faker');
const numberOfRecords = 100;

var seedDatabase = function() {
  for (let i = 1; i <= numberOfRecords; i++) {
    let record = new Description(generateDescription(i));
    record.save(function(err) {
      if (err) return console.error(err);

      if (i === numberOfRecords) {
        db.close();
      }
    });
  }
};

var generateDescription = function(productId) {
  return {
    productId: 1,
    size: 'Big',
    color: 'Red',
    details: 'Lorem Ipsum',
    packagingTypeId: 1,
    productImageUrl: 'https://placekitten.com/300/250',
  };
};

seedDatabase();
