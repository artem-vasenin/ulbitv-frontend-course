import counterReducer, {decrement, increment} from "./counterReducer";
import {screen} from "@testing-library/react";

describe('Тестируем Redux редюсер', () => {
  test('инкремент', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
    screen.debug();
  });
  test('декремент', () => {
    expect(counterReducer({ value: 1 }, decrement())).toEqual({ value: 0 });
    screen.debug();
  });
  // test('пустой стейт', () => {
  //   expect(getCounterValue({ counter: 100 })).toBe(100);
  //   screen.debug();
  // });
});
