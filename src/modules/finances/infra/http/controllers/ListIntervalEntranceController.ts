import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListIntervalEntranceService from '@modules/finances/services/ListIntervalEntranceService';

export default class ListIntervalController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listIntervalEntrance = container.resolve(ListIntervalEntranceService);

    const listEntrance = await listIntervalEntrance.execute({
      user_id,
    });

    return response.json(listEntrance);
  }
}
