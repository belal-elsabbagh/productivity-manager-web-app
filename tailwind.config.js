const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        // './resources/css/app.css',
    ],

    theme: {
        colors: {
            background: '#eaf0ff',
            content: '#faf4fd',
            white: '#FFFFFF',
            red: '#FF0000',
            textbox: '#4b00820d',
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                'tiny': '0.5rem',
            },
            widths: {
                '75': '18.75rem'
            }

        },
    },

    plugins: [require('@tailwindcss/forms')],
};
