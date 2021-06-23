module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    // fontSize: ["responsive", "hover", "focus", "active"],
    // padding: ["responsive", "hover", "focus", "active"],
    // margin: ["responsive", "hover", "focus", "active"],
    // align: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
