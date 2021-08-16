import AppError from '@shared/errors/AppError';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';
import DeleteFinanceService from './DeleteFinanceService';

let fakeFinancesRepository: FakeFinancesRepository;
let deleteFinance: DeleteFinanceService;

describe('DeleteFinance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();

    deleteFinance = new DeleteFinanceService(fakeFinancesRepository);
  });

  it('should be able to delete the finance', async () => {
    const deleteFile = jest.spyOn(fakeFinancesRepository, 'deleteFinance');

    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    await deleteFinance.execute({
      id: finance.id,
    });

    expect(deleteFile).toHaveBeenCalledWith(finance);
  });

  it('should not be able to delete the finance from non-existing finance', async () => {
    await expect(
      deleteFinance.execute({
        id: 'non-existing-finance-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
