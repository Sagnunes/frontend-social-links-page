/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        colors: {
            white: 'hsla(0, 0%, 100%)',
            grey: 'hsla(0, 0%, 20%)',
            darkGrey: 'hsla(0, 0%, 12%)',
            offBlack: 'hsla(0, 0%, 8%)',
            green: 'hsl(75, 94%, 57%)'
        }
    },
    plugins: [],
}