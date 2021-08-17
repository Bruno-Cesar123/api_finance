import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TotalEntranceFinanceController from '../controllers/TotalEntranceFinanceController';

const financeTotalRouter = Router();
const totalEntranceFinanceController = new TotalEntranceFinanceController();

financeTotalRouter.use(ensureAuthenticated);

financeTotalRouter.get('/entrance', totalEntranceFinanceController.index);

export default financeTotalRouter;
