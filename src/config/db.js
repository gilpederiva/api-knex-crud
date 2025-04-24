const knex = require('knex')({
    client: 'pg',
    connection: 'postgresql://admin:admin@localhost:5432/demo'
  });


  module.exports = knex