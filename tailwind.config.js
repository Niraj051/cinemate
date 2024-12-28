/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:"class",
    theme: {
      extend: {
        screens:{
          "other":{"min":"506px","max":"1200px"},
          "small":{"min":"220px","max":"505px"}
        },
        colors:{
          darkbg:"#1E293"
        }
      },
    },
    plugins: [],
  }