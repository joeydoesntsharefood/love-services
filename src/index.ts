import express, { Request, Response } from 'express';
import { variables } from './configs/variables';
import confess from './controllers/confess.controller';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.post('/', confess.Create);
app.get('/:id', confess.Index);

app.listen(variables.port, () => {
  console.log(`Servidor rodando na porta ${variables.port}`);
});