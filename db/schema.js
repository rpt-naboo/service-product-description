const { pg } = require('./index');

pg.schema.dropTableIfExists('descriptions')
  .dropTableIfExists('packaging_types')
  .dropTableIfExists('product_images')
  .then(() => pg.schema.createTable('packaging_types', (table) => {
    table.increments('id').primary().unique();
    table.string('packaging_type_label');
  })
    .createTable('product_images', (table) => {
      table.increments('id').primary().unique();
      table.string('file_id');
    })
    .createTable('descriptions', (table) => {
      table.increments('id').primary().unique();
      table.integer('product_id');
      table.string('product_size');
      table.string('product_color');
      table.string('details');
      table.integer('packaging_type_id');
      table.foreign('packaging_type_id').references('packaging_types.id');
      table.integer('product_image_id');
      table.foreign('product_image_id').references('product_images.id');
    }))
  .then(() => pg.insert({
    packaging_type_label: 'frustration-free packaging',
  }).into('packaging_types'))
  .then(() => pg.insert({
    file_id: 'DUMMY_FILE_ID',
  }).into('product_images'))
  .then(() => pg.insert({
    product_id: 1,
    product_size: '10 ounces',
    details: 'Puperade is Gatorade, but for your dog. Flavor is beef, but also comes in chicken or turkey.',
    packaging_type_id: 1,
    product_image_id: 1,
  }).into('descriptions'))
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
