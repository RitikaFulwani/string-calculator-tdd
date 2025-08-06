test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
});