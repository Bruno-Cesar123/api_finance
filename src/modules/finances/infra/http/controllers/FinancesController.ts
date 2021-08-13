import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateFinanceService from '@modules/finances/services/CreateFinanceService';
import ListFinancesService from '@modules/finances/services/ListFinancesService';

export default class FinancesController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showFinance = container.resolve(ListFinancesService);

    const finance = await showFinance.execute({
      user_id,
    });

    return response.json(finance);
  }
}
