import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FinancesController from '../controllers/FinancesController';

const financeRouter = Router();
const financesController = new FinancesController();

financeRouter.use(ensureAuthenticated);

// financeRouter.get('/', async (request, response) => {
//   const finances = await financesRepository.find();

//   return response.json(finances);
// });

financeRouter.post('/', financesController.create);

export default financeRouter;
