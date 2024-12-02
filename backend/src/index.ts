import express, { Response } from 'express';
import userRouter from './routes/userRouter';

const app = express();
const PORT = process.env.PORT || 8800;

app.use('/users', userRouter);

app.get('/', (res: Response) => {
  res.send('API de usuários está funcionando!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
