const funcs = require('./multiplyDivide.js');

describe("testing multiplication and division functions", () => {
  test("should multiply two numbers", () => {
    expect(funcs.multiply(6,3)).toBe(18);


  });
  test("should divide two numbers", () => {
    expect(funcs.divide(6,3)).toBe(2);
  })
})