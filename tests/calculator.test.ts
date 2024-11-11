import { calculator, VisualElement } from '../code/calculator';

describe('Calculator', () => {
  describe('add', () => {
    test('returns correct result', () => {
      // 1. Arrange
      const first = 10;
      const second = 0;
      const expected = 10;

      // 2. Act
      const result = calculator.add(first, second);

      // 3. Assert
      expect(result).toBe(expected);
    });
  });

  describe('subtract', () => {
    test('returns correct result', () => {
      // 1. Arrange
      const first = 10;
      const second = 0;
      const expected = 10;

      // 2. Act
      const result = calculator.add(first, second);

      // 3. Assert
      expect(result).toBe(expected);
    });
  });

  describe('divide', () => {
    test('returns correct result when second number is zero', () => {
      // 1. Arrange
      const first = 10;
      const second = 0;
      const expected = -1;

      // 2. Act
      const result = calculator.divide(first, second);

      // 3. Assert
      expect(result).toBe(expected);
    });

    test('returns correct result when second number is not zero', () => {
      // 1. Arrange
      const first = 10;
      const second = 1;
      const expected = 10;

      // 2. Act
      const result = calculator.divide(first, second);

      // 3. Assert
      expect(result).toBe(expected);
    });
  });

  describe('getTotalWidth', () => {
    test('calculates correct width', () => {
      // 1. Arrange
      const main = { width: 100, height: 50 };
      const sideElements: VisualElement[] = [];
      const expected = 100;

      // 2. Act
      const result = calculator.getTotalWidth(main, sideElements);

      // 3. Assert
      expect(result).toBe(expected);
    });
  });
});