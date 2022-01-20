const add = require('./add.js');

test("should add two numbers 2+2 = 4", () => {
  expect(add(2,2)).toBe(4);
})