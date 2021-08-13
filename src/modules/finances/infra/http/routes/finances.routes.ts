import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FinancesController from '../controllers/FinancesController';

const financeRouter = Router();
const financesController = new FinancesController();

financeRouter.use(ensureAuthenticated);

financeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      type: Joi.string().required(),
      description: Joi.string().required(),
      user_id: Joi.string().uuid().required(),
      value: Joi.number().required(),
      date: Joi.date().required(),
    },
  }),
  financesController.create,
);
financeRouter.get('/', financesController.index);

export default financeRouter;
