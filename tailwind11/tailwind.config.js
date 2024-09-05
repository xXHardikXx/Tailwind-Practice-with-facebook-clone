/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xsm: '500px',
      },
      spacing:{
        13:'3.2rem'
      }
    },
    fontSize: {
      '10xl':['9rem',{ linehight :'1.2'}],
    },
  },
  plugins: [],
}

