const { add } = require('../src/stringCalculator');

// Your existing test
test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

// Add this new test
test('returns the number itself for single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});