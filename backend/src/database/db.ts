
import mysql, { Pool } from 'mysql2';

const pool: Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db-crud',
});


export default pool;




