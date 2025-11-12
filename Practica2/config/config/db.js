import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'crud_db',
  port: 3306,    
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});