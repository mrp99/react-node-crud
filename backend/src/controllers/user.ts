import { Request, Response } from 'express';
import mysql from 'mysql2';

// Criação de uma pool de conexões com o banco de dados MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db-crud',
});

export const getUsers = (req: Request, res: Response): void => {

  const query = 'SELECT * FROM usuarios';

  pool.query(query, (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar usuários.' });
    return res.status(200).json(data);
  });
};


