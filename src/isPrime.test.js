const isPrime = require("./isPrime");

test("7 is a prime number: true", () => {
    
    expect(isPrime.isPrime(7)).toBe(true);
});
