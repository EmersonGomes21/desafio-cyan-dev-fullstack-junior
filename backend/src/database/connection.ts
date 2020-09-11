const  knex = require('knex');
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'), 
  },
  useNullAsDefault: true, //para retirar o aviso em amarelo
});
export default connection;