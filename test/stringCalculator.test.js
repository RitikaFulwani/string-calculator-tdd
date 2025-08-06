test('returns sum of any amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4,5")).toBe(15);
});