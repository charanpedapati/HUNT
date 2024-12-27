/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist-Regular', 'sans-serif'],
        "geist-bold": ['Geist-Bold', 'sans-serif'],
        "geist-extrabold": ['Geist-ExtraBold', 'sans-serif'],
        "geist-medium": ['Geist-medium', 'sans-serif'],
        "geist-semibold": ['Geist-SemiBold', 'sans-serif'],
        "geist-light": ['Geist-Light', 'sans-serif'],
      },
      colors: {
        "primary": {
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
        },
        "accent": {
          100: "#FBFBFD"
        },
        "black": {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31"
        },
        danger: "#F75555"
      }
    },
  },
  plugins: [],
}