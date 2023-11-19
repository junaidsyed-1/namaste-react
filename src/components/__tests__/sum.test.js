import { sum } from '../sum'

test("Sum function to calulate the sum of two numbers", () => {
    const result = sum(4, 4);

    // Assertion
    expect(result).toBe(7);
});