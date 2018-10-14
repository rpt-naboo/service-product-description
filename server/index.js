const express = require('express');
const app = express();
const port = 3000;

const pg = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'jonny',
    password: 'jonny',
    database: 'product_descriptions'
  }
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/:productId/descriptions', (req, res) => {
  pg.select().table('descriptions').where('product_id', req.params.productId)
  .then(function(rows) {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Server is now listening on port ${port}`));
