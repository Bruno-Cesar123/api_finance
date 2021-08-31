import ListIntervalEntranceService from './ListIntervalEntranceService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let listIntervalEntrance: ListIntervalEntranceService;

describe('ListIntervalEntrance', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    listIntervalEntrance = new ListIntervalEntranceService(
      fakeFinancesRepository,
    );
  });

  it('should be able to list financese', async () => {
    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    const listEntrances = await listIntervalEntrance.execute({
      user_id: finance.user_id,
    });

    expect(listEntrances).toStrictEqual([finance]);
  });
});
