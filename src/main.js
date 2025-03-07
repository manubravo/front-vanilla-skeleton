import './global.css';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from '/logo.svg';
import { setupCounter } from './app/counter.js';

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more more more
      </p>
      <br>
      <p>
      Deployed
      </p>
    </div>
  `;

  const counterButton = document.querySelector('#counter');

  if (counterButton instanceof HTMLElement) {
    setupCounter(counterButton);

  } else {
    console.error("The counter button was not found in the DOM or is not an HTMLElement.");
  }

} else {
  console.error("The #app element was not found in the DOM.");
}