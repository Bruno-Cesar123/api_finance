import { Router } from 'express';
import financeRouter from '@modules/finances/infra/http/routes/finances.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import financeTotalRouter from '@modules/finances/infra/http/routes/financestotal.routes';
import financeListRouter from '@modules/finances/infra/http/routes/financeslist.routes';

const routes = Router();

routes.use('/finance', financeRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/finance/total', financeTotalRouter);
routes.use('/finances', financeListRouter);

export default routes;
