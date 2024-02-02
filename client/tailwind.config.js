/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                logo_green: "#02554E",
                logo_red: "#B12222",
                logo_yellow: "#E19F48",
                logo_blue: "#191952",
              }, 
        },
        
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
