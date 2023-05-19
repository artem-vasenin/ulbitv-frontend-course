import {getCounterValue} from "./getCounterValue";
import {screen} from "@testing-library/react";

describe('Тестируем Redux', () => {
  test('работа с пустым стейтом', () => {
    expect(getCounterValue()).toBe(0);
    screen.debug();
  });
  test('работа с соткой', () => {
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
    screen.debug();
  });
});
