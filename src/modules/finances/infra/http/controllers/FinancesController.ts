import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateFinanceService from '@modules/finances/services/CreateFinanceService';

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
}
