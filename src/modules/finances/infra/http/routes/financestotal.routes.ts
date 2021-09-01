import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TotalEntranceFinanceController from '../controllers/TotalEntranceFinanceController';
import TotalSpendFinanceController from '../controllers/TotalSpendFinanceController';

import ListIntervalEntranceController from '../controllers/ListIntervalEntranceController';
import ListIntervalSpendController from '../controllers/ListIntervalSpendController';

const financeTotalRouter = Router();
const totalEntranceFinanceController = new TotalEntranceFinanceController();
const totalSpendFinanceController = new TotalSpendFinanceController();
const listIntervalEntrance = new ListIntervalEntranceController();
const listIntervalSpend = new ListIntervalSpendController();

financeTotalRouter.use(ensureAuthenticated);

financeTotalRouter.get('/total/entrance', totalEntranceFinanceController.index);
financeTotalRouter.get('/total/spend', totalSpendFinanceController.index);
financeTotalRouter.get('/entrance', listIntervalEntrance.index);
financeTotalRouter.get('/spend', listIntervalSpend.index);

export default financeTotalRouter;
