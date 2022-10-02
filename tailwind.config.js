module.exports = {
  jit: true,
  darkMode: "class",
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      "primary": "#ff0000",
      "secondary": "#ffffff",
      "logo": "#5f5f5f"
    }
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
}