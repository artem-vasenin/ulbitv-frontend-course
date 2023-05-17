const arrToStr = require('./arrToStr');

describe('arrToStr', () => {
  test('Валидация массива [1, 2, 3]', () => {
    expect(arrToStr([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Валидация массива [1, 2, \'3\', \'a\', null, undefined, false]', () => {
    expect(arrToStr([1, 2, '3', 'a', null, undefined, false])).toEqual(['1', '2']);
  });
  test('Пустой массив []', () => {
    expect(arrToStr([])).toEqual([]);
  });
  test('Не пустой массив [1, 2, 3]', () => {
    expect(arrToStr([1, 2, 3])).not.toEqual([]);
  });
});
