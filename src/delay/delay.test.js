const delay = require('./delay');

describe('delay', () => {
  let mock;
  beforeEach(() => {
    // вызовется перед каждым тестом
  })
  beforeAll(() => {
    // вызовется один раз перед тестами
  })
  test('Вызываем асинхронный калбэк - 10/1000', async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
  afterEach(() => {
    // вызовется после каждого теста
  })
  afterAll(() => {
    // вызовется после всех тестов единожды
  })
});
