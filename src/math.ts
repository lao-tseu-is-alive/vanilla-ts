/**
 * 🔢 Math utilities — pure functions, easy to test!
 */

/** Add two numbers */
export function add(a: number, b: number): number {
  return a + b;
}

/** Subtract b from a */
export function subtract(a: number, b: number): number {
  return a - b;
}

/** Multiply two numbers */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Compute the nth Fibonacci number (0-indexed).
 * fib(0) = 0, fib(1) = 1, fib(2) = 1, fib(6) = 8 …
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  if (n <= 1) return n;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

/** Check if a number is prime */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/** Clamp a value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
