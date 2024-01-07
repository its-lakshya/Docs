const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      FontFamily: {
        inter : ["Inter"],
        petitFormal : ["Petit Formal Script"],
        russonOne : ["Russon One"]
      }
    },
  },
  plugins: [],
});