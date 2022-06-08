const calc = require("./task3");
let c = console.log;

describe("DMAS functions", () => {
  describe("ADD METHOD of DMAS", () => {
    test("Add", () => {
      expect(calc.add(2, 4)).toBe(6);
      expect(calc.add(1, 4)).toBe(5);
      expect(calc.add(3, 4)).toBe(7);
    });
  });
  describe("multiply METHOD of calc", () => {
    test("multiply", () => {
      expect(calc.multiply(2, 4)).toBe(8);
      expect(calc.multiply(1, 4)).toBe(4);
      expect(calc.multiply(3, 4)).toBe(12);
    });
  });
  describe("substract METHOD of calc", () => {
    test("substract", () => {
      expect(calc.substract(2, 4)).toBe(-2);
      expect(calc.substract(1, 4)).toBe(-3);
      expect(calc.substract(3, 4)).toBe(-1);
    });
  });
  describe("divide METHOD of calc", () => {
    test("divide", () => {
      expect(calc.divide(4, 2)).toBe(2);
      expect(calc.divide(4, 4)).toBe(1);
      expect(calc.divide(4, 1)).toBe(4);
    });
  });
});
