import { Request, Response } from 'express';
// import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateFinanceService from '@modules/finances/services/CreateFinanceService';
import ListFinancesService from '@modules/finances/services/ListFinancesService';
import ShowFinanceService from '@modules/finances/services/ShowFinanceService';
import DeleteFinanceService from '@modules/finances/services/DeleteFinanceService';

export default class FinancesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { type, description, user_id, value, date } = request.body;

    // const parsedDate = parseISO(date);

    const createFinance = container.resolve(CreateFinanceService);

    const finance = await createFinance.execute({
      type,
      description,
      user_id,
      value,
      date,
    });

    return response.json(finance);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showFinance = container.resolve(ListFinancesService);

    const finance = await showFinance.execute({
      user_id,
    });

    return response.json(finance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showFinance = container.resolve(ShowFinanceService);

    const finance = await showFinance.execute({ id });

    return response.json(finance);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const finance = container.resolve(DeleteFinanceService);

    await finance.execute({
      id,
    });

    return response.json({ message: 'delete succefully' });
  }
}
