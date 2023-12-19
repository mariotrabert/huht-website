import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  //daisyui config
  daisyui: {
    themes: [
      "forest",
      "garden",
      {
        huhtTheme: {
          primary: "#14532d",
          "primary-content": "ffffff",
          secondary: "#84cc16",
          accent: "#facc15",
          neutral: "#ffffff",
          "base-100": "#f3f4f6",
          info: "#ffffff",
          success: "#a3e635",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
};
export default config;
