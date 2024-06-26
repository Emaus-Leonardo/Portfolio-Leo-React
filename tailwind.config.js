/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    // boxShadow: {
    //   custom: "7px 7px 16.4px 0px rgba(0,0,0,0.25)"
    // },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1550px'
      
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
        accent: "#EEF7F9",
        bgHome: "#1D1E22",
        textNav: "#7D7D7D",
      },
    },
  },
  plugins: [],
};
