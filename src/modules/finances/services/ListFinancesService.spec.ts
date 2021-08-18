import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListFinancesService from './ListFinancesService';
import FakeFinancesRepository from '../repositories/fakes/FakeFinancesRepository';

let fakeFinancesRepository: FakeFinancesRepository;
let fakeCacheProvider: FakeCacheProvider;
let listFinances: ListFinancesService;

describe('ListFinances', () => {
  beforeEach(() => {
    fakeFinancesRepository = new FakeFinancesRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listFinances = new ListFinancesService(
      fakeFinancesRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new finance', async () => {
    const finance = await fakeFinancesRepository.create({
      type: 'spend',
      description: 'water bill',
      user_id: '123123',
      value: 32.9,
      date: new Date(),
    });

    const ShowFinances = await listFinances.execute({
      user_id: finance.user_id,
    });

    expect(ShowFinances).toStrictEqual([finance]);
  });
});
