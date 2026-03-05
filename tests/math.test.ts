import { describe, test, expect } from "bun:test";
import { add, subtract, multiply, fibonacci, isPrime, clamp } from "../src/math";

describe("add", () => {
    test("adds two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("handles negative numbers", () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test("adding zero changes nothing", () => {
        expect(add(42, 0)).toBe(42);
    });
});

describe("subtract", () => {
    test("subtracts correctly", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test("can produce negative results", () => {
        expect(subtract(3, 7)).toBe(-4);
    });
});

describe("multiply", () => {
    test("multiplies two numbers", () => {
        expect(multiply(3, 7)).toBe(21);
    });

    test("anything times zero is zero", () => {
        expect(multiply(999, 0)).toBe(0);
    });
});

describe("fibonacci", () => {
    test("fib(0) = 0", () => {
        expect(fibonacci(0)).toBe(0);
    });

    test("fib(1) = 1", () => {
        expect(fibonacci(1)).toBe(1);
    });

    test("fib(6) = 8", () => {
        expect(fibonacci(6)).toBe(8);
    });

    test("fib(10) = 55", () => {
        expect(fibonacci(10)).toBe(55);
    });

    test("throws on negative input", () => {
        expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
    });
});

describe("isPrime", () => {
    test("2 is prime", () => {
        expect(isPrime(2)).toBeTrue();
    });

    test("7 is prime", () => {
        expect(isPrime(7)).toBeTrue();
    });

    test("4 is not prime", () => {
        expect(isPrime(4)).toBeFalse();
    });

    test("1 is not prime", () => {
        expect(isPrime(1)).toBeFalse();
    });

    test("97 is prime", () => {
        expect(isPrime(97)).toBeTrue();
    });
});

describe("clamp", () => {
    test("clamps value above max", () => {
        expect(clamp(150, 0, 100)).toBe(100);
    });

    test("clamps value below min", () => {
        expect(clamp(-5, 0, 100)).toBe(0);
    });

    test("leaves value in range untouched", () => {
        expect(clamp(50, 0, 100)).toBe(50);
    });
});
