import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowTotalSpendFinanceService from '@modules/finances/services/ShowTotalSpendFinanceService';

export default class TotalSpendFinanceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const totalSpendFinance = container.resolve(ShowTotalSpendFinanceService);

    const totalFinance = await totalSpendFinance.execute({
      user_id,
    });

    return response.json(totalFinance);
  }
}
