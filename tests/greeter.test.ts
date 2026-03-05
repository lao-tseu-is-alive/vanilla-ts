import { describe, test, expect } from "bun:test";
import {
    greet,
    farewell,
    getTimeBasedGreeting,
    reverse,
    toTitleCase,
} from "../src/greeter";

describe("greet", () => {
    test("greets by name", () => {
        expect(greet("Alice")).toContain("Alice");
    });

    test("includes a bun emoji", () => {
        expect(greet("Bob")).toContain("🐰");
    });
});

describe("farewell", () => {
    test("says goodbye by name", () => {
        expect(farewell("Charlie")).toStartWith("Goodbye, Charlie");
    });

    test("includes a wave", () => {
        expect(farewell("Dave")).toContain("👋");
    });
});

describe("getTimeBasedGreeting", () => {
    test("morning greeting (8am)", () => {
        expect(getTimeBasedGreeting(8)).toContain("morning");
    });

    test("afternoon greeting (14h)", () => {
        expect(getTimeBasedGreeting(14)).toContain("afternoon");
    });

    test("evening greeting (19h)", () => {
        expect(getTimeBasedGreeting(19)).toContain("evening");
    });

    test("night greeting (2am)", () => {
        expect(getTimeBasedGreeting(2)).toContain("night");
    });
});

describe("reverse", () => {
    test("reverses a string", () => {
        expect(reverse("bun")).toBe("nub");
    });

    test("handles empty string", () => {
        expect(reverse("")).toBe("");
    });
});

describe("toTitleCase", () => {
    test("capitalizes each word", () => {
        expect(toTitleCase("hello world")).toBe("Hello World");
    });

    test("handles single word", () => {
        expect(toTitleCase("bun")).toBe("Bun");
    });

    test("lowercases before capitalizing", () => {
        expect(toTitleCase("LOUD NOISES")).toBe("Loud Noises");
    });
});
