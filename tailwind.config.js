/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // TODO: Update colors
    colors: {
      primary: "#2762EC",
      secondary: "#",
      tertiary: "#",
      pale_primary: "",
      black: "#000000",
      white: "#FFFFFF",
      grey1: "#555555",
      grey2: "#828282",
      grey3: "#C4C4C4",
      grey4: "#F0F0F0",
      error: "#FF3B30",
      success: "#34C759",
    },
    // TODO: change line height to percent
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "22px"],
      f5: ["16px", "20px"],
      f4: ["24px", "28px"],
      f3: ["32px", "35px"],
      f2: ["40px", "44px"],
      f1: ["56px", "62px"],
    },
  },
};
