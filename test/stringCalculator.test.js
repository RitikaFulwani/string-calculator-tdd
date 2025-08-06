test('returns sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
    expect(add("2,3")).toBe(5);
});