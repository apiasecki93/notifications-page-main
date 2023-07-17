/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        tomato: "#f65351",
        bluee: "#0a317b",
        veryLigGrayBlue: "#f7fafd",
        ligGraBlu1: "#e5effa",
        ligGraBlu2: "#dde7ee",
        grayBlu: "#939dae",
        darkGrayBlu: "#5e6778",
        veryDarkBlue: "#1c202b",
      },
      screens: {
        ssm: { max: "375px" },
        mmin: { min: "376px" },
      },
    },
  },
  plugins: [],
};
