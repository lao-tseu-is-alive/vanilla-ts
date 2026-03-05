# vanilla-ts

A minimal, batteries-included TypeScript starter powered by [Bun](https://bun.sh).

**Zero config.** No bundler, no build step — just Bun.

## Quick Start

Use this template directly:

```bash
bun create <your-github-user>/vanilla-ts my-app
cd my-app
bun run dev
```

Or clone and install manually:

```bash
git clone https://github.com/<your-github-user>/vanilla-ts.git
cd vanilla-ts
bun install
bun run dev
```

## Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `bun run dev`      | Start dev server with HMR      |
| `bun test`         | Run the test suite              |
| `bun test --watch` | Run tests in watch mode         |

## Project Structure

```
├── src/
│   ├── app.ts        ← Client-side entry (runs in the browser)
│   ├── math.ts       ← Pure utility functions
│   └── greeter.ts    ← String helpers
├── tests/
│   ├── math.test.ts
│   └── greeter.test.ts
├── index.html        ← Entry point (served by Bun)
├── style.css
├── package.json
└── tsconfig.json
```

## What's Included

- **Native TypeScript** — Bun runs `.ts` files directly, no transpilation step
- **Dev Server with HMR** — `bun index.html` gives you a full dev server out of the box
- **Built-in Test Runner** — Jest-compatible `bun test` with `describe`, `test`, `expect`, and more
- **Modern CSS** — Dark theme with gradients and micro-animations

## Bun Test Runner

Tests live in `tests/` and use `bun:test`:

```ts
import { describe, test, expect } from "bun:test";
import { add, isPrime } from "../src/math";

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("isPrime", () => {
  test("7 is prime", () => {
    expect(isPrime(7)).toBeTrue();
  });
});
```

Run all tests:

```bash
bun test
```

Watch mode (re-runs on file changes):

```bash
bun test --watch
```

## Learn More

- [Bun Docs](https://bun.sh/docs)
- [bun create](https://bun.sh/docs/runtime/templating/create)
- [Bun Test Runner](https://bun.sh/docs/cli/test)
- [Writing Tests](https://bun.sh/docs/test/writing-tests)

## License

MIT
