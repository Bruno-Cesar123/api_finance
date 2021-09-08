import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ListIntervalEntranceController from '../controllers/ListIntervalEntranceController';
import ListIntervalSpendController from '../controllers/ListIntervalSpendController';

const financeListRouter = Router();

const listIntervalEntrance = new ListIntervalEntranceController();
const listIntervalSpend = new ListIntervalSpendController();

financeListRouter.use(ensureAuthenticated);

financeListRouter.get('/entrance', listIntervalEntrance.index);
financeListRouter.get('/spend', listIntervalSpend.index);

export default financeListRouter;
