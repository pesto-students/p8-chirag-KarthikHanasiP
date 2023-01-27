const mathOperations = require('./calculator');

describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   expect(mathOperations.sum(1, 2)).toBe(3);
 });

 test('diff 2 - 1 should return 1', () => {
   expect(mathOperations.diff(2, 1)).toBe(1);
 });

 test('product 1 * 2 should return 2', () => {
   expect(mathOperations.product(1, 2)).toBe(2);
 });
});