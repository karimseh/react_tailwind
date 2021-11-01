const tailwindcss = require('tailwindcss');
const colors = require('tailwindcss/colors')


module.exports = {
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        colors: {
            teal: colors.teal
        }
      }
}