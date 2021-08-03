import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import FinancesRepository from '../repositories/FinancesRepository';
import CreateFinanceService from '../services/CreateFinanceService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const financeRouter = Router();

financeRouter.use(ensureAuthenticated);

financeRouter.get('/', async (request, response) => {
  const financesRepository = getCustomRepository(FinancesRepository);
  const finances = await financesRepository.find();

  return response.json(finances);
});

financeRouter.post('/', async (request, response) => {
  try {
    const { type, description, user_id, value, date } = request.body;

    const parsedDate = parseISO(date);

    const createFinance = new CreateFinanceService();

    const finance = await createFinance.execute({
      type,
      description,
      value,
      user_id,
      date: parsedDate,
    });

    return response.json(finance);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default financeRouter;
