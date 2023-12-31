const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#d0e3fa",
                    200: "#a1c7f6",
                    300: "#73aaf1",
                    400: "#448eed",
                    500: "#1572e8",
                    600: "#115bba",
                    700: "#0d448b",
                    800: "#082e5d",
                    900: "#04172e",
                },
            },
            fontFamily: {
                robotto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
});
