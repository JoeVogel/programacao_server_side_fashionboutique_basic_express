import express from 'express';
import customersRouter from './routes/customers.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/customers', customersRouter);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
