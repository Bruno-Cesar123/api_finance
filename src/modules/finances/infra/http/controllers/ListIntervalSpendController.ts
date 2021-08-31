import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListIntervalSpendService from '@modules/finances/services/ListIntervalSpendService';

export default class TotalSpendFinanceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listIntervalSpend = container.resolve(ListIntervalSpendService);

    const listSpend = await listIntervalSpend.execute({
      user_id,
    });

    return response.json(listSpend);
  }
}
