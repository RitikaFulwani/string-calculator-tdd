test('throws exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("-1,-2")).toThrow("negative numbers not allowed: -1,-2");
});