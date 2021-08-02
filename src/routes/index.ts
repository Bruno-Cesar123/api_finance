import { Router } from 'express';
import financeRouter from './finance.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/finance', financeRouter);
routes.use('/users', usersRouter);

export default routes;
