const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself for single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3")).toBe(5);
});

test('returns sum of any amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
});

test('throws exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("-1,-2")).toThrow("negative numbers not allowed: -1,-2");
});