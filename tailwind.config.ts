import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        7: '7',
        8: '8',
        10: '10',
        12: '12'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      width: {
        'custom': 'min(max(768px, 75%), 100%)'
      }
    },
  },
  plugins: [],
};
export default config;
