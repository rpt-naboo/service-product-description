require('dotenv').config();

const pg = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const bookshelf = require('bookshelf')(pg);

let Description = bookshelf.Model.extend({
  tableName: 'descriptions',
  record: function() {
    return this.hasOne(PackagingType);
  }
});

let PackagingType = bookshelf.Model.extend({
  tableName: 'packaging_types',
});

module.exports.pg = pg;
module.exports.bookshelf = bookshelf;
module.exports.PackagingType = PackagingType;
module.exports.Description = Description;
