// Light/dark theme for the .ecom landing pages. The resolved theme lives on <html data-theme>;
// a saved choice in localStorage wins, otherwise it follows the system setting (live).
export const THEME_KEY = "acq-theme";

// Inlined in <head> by the root layout so the right theme is set before first paint.
export const THEME_INIT = `(function(){try{var k="${THEME_KEY}",d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)");function a(){var s=null;try{s=localStorage.getItem(k)}catch(e){}d.dataset.theme=s==="dark"||s==="light"?s:m.matches?"dark":"light"}a();m.addEventListener("change",a)}catch(e){}})();`;

// Flip the theme. Picking whatever the system already uses clears the saved choice, so the page follows the system again.
export function toggleTheme() {
  const d = document.documentElement;
  const next = d.dataset.theme === "dark" ? "light" : "dark";
  const sys = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  try {
    if (next === sys) localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, next);
  } catch {}
  d.dataset.theme = next;
}

// Nav button; CSS shows the moon in light mode and the sun in dark mode.
export const THEME_TOGGLE = `<button class="theme-tg" type="button" aria-label="Toggle dark mode" title="Toggle dark mode"><svg class="i-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg><svg class="i-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>`;
