/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "color-border-brand-default": "var(--color-border-brand-default)",
          "color-primitives-brand-900": "var(--color-primitives-brand-900)",
          "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
        },
        fontFamily: {
          "m3-headline-medium-emphasized":
            "var(--m3-headline-medium-emphasized-font-family)",
          "title-hero": "var(--title-hero-font-family)",
        },
      },
    },
    plugins: [],
  };
  