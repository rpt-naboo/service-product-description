var pg = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'jonny',
    password: 'jonny',
    database: 'product_descriptions'
  }
});

pg.schema.createTable('description', function(table) {
  table.increments('id');
  table.string('product_description');
})
.then(function() {
  return pg.insert({product_description: 'Great success!'}).into('description');
})
.then(function() {
  return pg('description')
    .select('description.product_description');
})
.map(function(row) {
  console.log(row);
})
.catch(function(e) {
  console.error(e);
});
