import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { violet: { 600: "#6d28d9", 500: "#7c3aed" } },
    },
  },
  plugins: [],
} satisfies Config;
