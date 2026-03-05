/**
 * 👋 Greeter module — friendly string utilities
 */

/** Say hello to someone */
export function greet(name: string): string {
    return `Hello, ${name}! Welcome to Bun 🐰`;
}

/** Say goodbye */
export function farewell(name: string): string {
    return `Goodbye, ${name}! See you soon 👋`;
}

/** Get a greeting based on the current hour */
export function getTimeBasedGreeting(hour?: number): string {
    const h = hour ?? new Date().getHours();

    if (h >= 5 && h < 12) return "Good morning 🌅";
    if (h >= 12 && h < 17) return "Good afternoon ☀️";
    if (h >= 17 && h < 21) return "Good evening 🌆";
    return "Good night 🌙";
}

/** Reverse a string */
export function reverse(str: string): string {
    return [...str].reverse().join("");
}

/** Convert a string to title case */
export function toTitleCase(str: string): string {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
