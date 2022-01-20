const subtract = require('./subtract.js');

test("Should subtract two numbers", () => {
  expect(subtract(15,1)).toBe(14);
})