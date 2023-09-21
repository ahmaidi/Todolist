/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        background: '#6918cd',
        bgItemColor:'#8758ff',
        placeholder:'#ffffff96',
      },
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [],
}

