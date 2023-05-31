import { classNames } from './classNames';

describe('classNames', () => {
  test('One param', () => {
    expect(classNames('testClass')).toBe('testClass');
  });
  test('Add classes', () => {
    const exp = 'testClass secondClass thirdClass';
    expect(classNames('testClass', ['secondClass', 'thirdClass'])).toBe(exp);
  });
  test('Add mods', () => {
    const exp = 'testClass secondClass';
    expect(classNames('testClass', [], { secondClass: true, thirdClass: false })).toBe(exp);
  });
});
