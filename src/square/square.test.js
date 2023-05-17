const square = require('./square');

describe('arrToStr', () => {
  let mock;
  beforeEach(() => {
    // вызовется перед каждым тестом
  })
  beforeAll(() => {
    // вызовется один раз перед тестами
  })
  test('Проверяем сколько раз вызывается функция pow при значении 2', () => {
    // const spyMathPow = jest.spyOn(Math, 'pow');
    // square(2);
    expect(square(2)).toBe(4);
  });
  afterEach(() => {
    // вызовется после каждого теста
  })
  afterAll(() => {
    // вызовется после всех тестов единожды
  })
});
