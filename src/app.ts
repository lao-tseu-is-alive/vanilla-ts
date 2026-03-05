/**
 * 🚀 Main app entry point
 * This runs in the browser — Bun serves it directly from index.html!
 */

import { add, fibonacci, isPrime } from "./math";
import { greet, getTimeBasedGreeting, toTitleCase } from "./greeter";

// ── Counter ────────────────────────────────────────────────────
function setupCounter(button: HTMLButtonElement, display: HTMLElement) {
    let count = 0;

    const update = () => {
        count = add(count, 1);
        button.textContent = `Count: ${count}`;
        display.textContent = isPrime(count)
            ? `✨ ${count} is prime!`
            : `fib(${count}) = ${fibonacci(count)}`;
    };

    button.addEventListener("click", update);
    button.textContent = `Count: ${count}`;
    display.textContent = "Click the button to start!";
}

// ── Greeting ───────────────────────────────────────────────────
function setupGreeting(el: HTMLElement) {
    const timeGreeting = getTimeBasedGreeting();
    const name = toTitleCase("bun developer");
    el.textContent = `${timeGreeting} — ${greet(name)}`;
}

// ── Init ───────────────────────────────────────────────────────
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="hero">
    <div class="logo">🐰</div>
    <h1>Bun <span class="highlight">vanilla-ts</span></h1>
    <p id="greeting" class="greeting"></p>
  </div>

  <div class="card">
    <button id="counter" type="button">Count: 0</button>
    <p id="counter-info" class="counter-info"></p>
  </div>

  <div class="features">
    <div class="feature">
      <span class="feature-icon">⚡</span>
      <h3>Zero Config</h3>
      <p>Just run <code>bun run dev</code></p>
    </div>
    <div class="feature">
      <span class="feature-icon">🧪</span>
      <h3>Built-in Tests</h3>
      <p>Run <code>bun test</code></p>
    </div>
    <div class="feature">
      <span class="feature-icon">🔥</span>
      <h3>HMR Included</h3>
      <p>Edit &amp; see changes instantly</p>
    </div>
  </div>

  <footer class="footer">
    <p>Built with <a href="https://bun.sh" target="_blank">Bun</a> — the fast all-in-one JavaScript runtime</p>
  </footer>
`;

setupGreeting(document.getElementById("greeting")!);
setupCounter(
    document.querySelector<HTMLButtonElement>("#counter")!,
    document.getElementById("counter-info")!,
);
