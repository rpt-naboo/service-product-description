const { pg } = require('./index');

pg.schema.dropTableIfExists('descriptions')
  .dropTableIfExists('packaging_types')
  .then(() => pg.schema.createTable('packaging_types', (table) => {
    table.increments('id').primary().unique();
    table.string('packaging_type_label');
  })
    .createTable('descriptions', (table) => {
      table.increments('id').primary().unique();
      table.integer('product_id');
      table.string('product_size');
      table.string('product_color');
      table.text('details');
      table.integer('packaging_type_id');
      table.foreign('packaging_type_id').references('packaging_types.id');
      table.string('product_image_url');
    }))
  .then(() => pg('descriptions')
    .select())
  .map((row) => {
    console.log(row);
    return row;
  })
  .catch((e) => {
    console.error(e);
    return e;
  })
  .then(() => {
    pg.destroy();
  });
