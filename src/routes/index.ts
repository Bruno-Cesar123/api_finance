import { Router } from 'express';
import financeRouter from './finance.routes';

const routes = Router();

routes.use('/finance', financeRouter);

export default routes;
