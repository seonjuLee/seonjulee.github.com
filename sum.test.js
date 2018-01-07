const sum = require('./sum');

test('2개숫자의합', () => {
  expect(sum(2,48)).toBe(50);
});

test('2개숫자의합', () => {
  expect(sum(2,148)).toBe(150);
});