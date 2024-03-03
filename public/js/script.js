import Alpine from "alpinejs";
import "htmx.org";
import { initFlowbite } from "flowbite";

// Initializing Flowbite.
initFlowbite();

// Alpine config
window.Alpine = Alpine;

// Dark mode store.
Alpine.store("darkMode", {
  // This just hold a true or false value
  darkTheme:
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
  // This is a function that toggles the value
  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem("color-theme", this.darkTheme ? "dark" : "light");
  },
});

Alpine.start();

// HTMX config
window.htmx = require("htmx.org");
