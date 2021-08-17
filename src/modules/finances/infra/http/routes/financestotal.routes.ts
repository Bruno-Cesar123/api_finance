import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TotalEntranceFinanceController from '../controllers/TotalEntranceFinanceController';
import TotalSpendFinanceController from '../controllers/TotalSpendFinanceController';

const financeTotalRouter = Router();
const totalEntranceFinanceController = new TotalEntranceFinanceController();
const totalSpendFinanceController = new TotalSpendFinanceController();

financeTotalRouter.use(ensureAuthenticated);

financeTotalRouter.get('/entrance', totalEntranceFinanceController.index);
financeTotalRouter.get('/spend', totalSpendFinanceController.index);

export default financeTotalRouter;
