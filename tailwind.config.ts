import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontSize: {
          display1: ["140px", { fontWeight: "600" }],
          display2: ["110px", { fontWeight: "600" }],
          display3: ["98px", { fontWeight: "600" }],
          heading1: ["84px", { fontWeight: "600" }],
          heading2: ["63px", { fontWeight: "600" }],
          heading3: ["54px", { fontWeight: "600" }],
          heading4: ["42px", { fontWeight: "600" }],
          heading5: ["34px", { fontWeight: "600" }],
          heading6: ["28px", { fontWeight: "600" }],
          heading7: ["20px", { fontWeight: "600" }],
          "body-2xl-bold": ["20px", { fontWeight: "700" }],
          "body-2xl-semibold": ["20px", { fontWeight: "600" }],
          "body-2xl-regular": ["20px", { fontWeight: "400" }],
          "body-xl-bold": ["18px", { fontWeight: "700" }],
          "body-xl-semibold": ["18px", { fontWeight: "600" }],
          "body-xl-regular": ["18px", { fontWeight: "400" }],
          "body-large-bold": ["16px", { fontWeight: "700" }],
          "body-large-semibold": ["16px", { fontWeight: "600" }],
          "body-large-regular": ["16px", { fontWeight: "400" }],
          "body-medium-bold": ["14px", { fontWeight: "700" }],
          "body-medium-semibold": ["14px", { fontWeight: "600" }],
          "body-medium-regular": ["14px", { fontWeight: "400" }],
          "body-small-bold": ["12px", { fontWeight: "700" }],
          "body-small-semibold": ["12px", { fontWeight: "600" }],
          "body-small-regular": ["12px", { fontWeight: "400" }],
        },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
