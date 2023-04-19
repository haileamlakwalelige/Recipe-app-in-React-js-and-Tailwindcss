/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        "xss":"480",
      'sms': {'max': '767px'},
    },
      },
    },
  plugins: [],
}
