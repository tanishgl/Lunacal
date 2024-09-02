/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        lg: "1068px",
      },
      borderRadius: {
        2.46: "2.46px",
        20: "20px",
        23: "23px",
        104: "104px",
      },
      width: {
        45: "45px",
        149: "149px",
        190: "190px",
        496: "496px",
        597: "597px",
        611: "611px",
        612: "612px",
        614: "614px",
        720: "720px",
      },
      height: {
        62: "62px",
        45: "45px",
        175: "175px",
        179: "179px",
        280: "280px",
        316: "316px",
        330: "330px",
      },
      fontFamily: {
        poppin: "Poppins",
        pjs: "Plus Jakarta Sans",
      },
      boxShadow: {
        tan: [
          "0,3.26,3.26,0,rgba(255,255,255,15%)",
          "0,0,48.91,0,rgba(255,255,255,5%)",
        ],
        cursor: ["4px 5px 30px 5px #101213", "-5px -3px 30px -10px #96BEE7"],
        tan: [
          "0px 3.26px 3.26px 0px #FFFFFF26 inset",
          "0px 0px 48.91px 0px #FFFFFF0D inset",
          "9,10,7.1,0,rgba(0,0,0,40%)",
          "-0.5,-0.5,6.9,0,rgba(255,255,255,25%)",
        ],
      },
      dropShadow: {
        nav: ["0,4.96,12.4,2.48,rgba(0,0,0,25%)"],
        div: "0px 4px 4px 0px #00000054",
      },
      backgroundColor: {
        tan: "rgba(255,255,255,3%)",
        gal: "#363C43",
        arr: "#6F787C",
        img: "rgba(0,0,0,20%)",
        nav: "#171717",
      },
      backgroundImage: {
        arrow: "linear-gradient(#303439, #161718)",
        div: [
          "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%)",
          "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        ],
      },
      grayscale: {
        100: "100%",
      },
      colors: {
        tex: "#969696",
      },
      container: {
        1.5: "6px",
      },
    },
  },
  plugins: [],
};

// box-shadow: 0px 3.26px 3.26px 0px #FFFFFF26 inset;

// box-shadow: 0px 0px 48.91px 0px #FFFFFF0D inset;

// box-shadow: 9px 10px 7.1px 0px #00000066;

// box-shadow: -0.5px -0.5px 6.9px 0px #FFFFFF40;
