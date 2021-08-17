import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowTotalEntranceFinanceService from '@modules/finances/services/ShowTotalEntranceFinanceService';

export default class TotalEntranceFinanceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const totalFinanceEntrance = container.resolve(
      ShowTotalEntranceFinanceService,
    );

    const totalFinance = await totalFinanceEntrance.execute({
      user_id,
    });

    return response.json(totalFinance);
  }
}
