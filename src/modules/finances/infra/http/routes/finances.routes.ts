import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateFinanceService from '@modules/finances/services/CreateFinanceService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const financeRouter = Router();

financeRouter.use(ensureAuthenticated);

// financeRouter.get('/', async (request, response) => {
//   const finances = await financesRepository.find();

//   return response.json(finances);
// });

financeRouter.post('/', async (request, response) => {
  const { type, description, user_id, value, date } = request.body;

  const parsedDate = parseISO(date);

  const createFinance = container.resolve(CreateFinanceService);

  const finance = await createFinance.execute({
    type,
    description,
    value,
    user_id,
    date: parsedDate,
  });

  return response.json(finance);
});

export default financeRouter;
