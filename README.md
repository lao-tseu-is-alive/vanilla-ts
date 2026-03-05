# vanilla-ts

A minimal, batteries-included TypeScript starter powered by [Bun](https://bun.sh).

**Zero config.** No bundler, no build step — just Bun.

## Quick Start

Use this template directly:

```bash
bun create lao-tseu-is-alive/vanilla-ts my-app
cd my-app
bun run dev
```

Or clone and install manually:

```bash
git clone https://github.com/lao-tseu-is-alive/vanilla-ts.git
cd vanilla-ts
bun install
bun run dev
```

## Scripts

| Command                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `bun run dev`          | Start dev server with HMR                          |
| `bun test`             | Run the test suite                                 |
| `bun test --watch`     | Run tests in watch mode                            |
| `bun run build`        | Build standard static site (HTML/JS/CSS separated) |
| `bun run build:inline` | Build single-file portable app (everything inlined)|


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

## 🏗 Building for Production

This template exploits Bun's native HTML bundler to offer two distinct compilation strategies out of the box — zero config, zero plugins.

### 1. Standard Web Build
```bash
bun run build

```

*(Under the hood: `bun build ./index.html --outdir=dist --minify`)*

* **Output:** Generates a standard static site distribution (`index.html` + hashed `.js` and `.css` files).
* **Use case:** Traditional deployments (Vercel, Netlify, GitHub Pages, Nginx). The separation ensures optimal browser caching for individual assets.

### 2. Single-File Portable App (Inlined)

```bash
bun run build:inline

```

*(Under the hood: `bun build --compile ./index.html --outdir=dist --minify`)*

* **Output:** Generates a **single, standalone `index.html**` file. All TypeScript/JavaScript and CSS are compiled, minified, and injected directly into the HTML payload.
* **Use case:** Micro-apps, portable offline tools, HTML email attachments, or WebViews. Distribute a fully functional app as one single file with zero external network requests.





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
