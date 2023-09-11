/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "project-stars": "url('/project-stars.svg')",
        "areaWork-stars": "url('/areaWork-stars.svg')",
        "hero-brush": "url('/hero-brush.png')",
        "areaWork-brush": "url('/areaWork-brush.png')",
        "project-brush": "url('/project-brush.png')",
      },
      colors: {
        blue: "#4BE1F4",
        pink: "#F87388",
        green: "#C8D316",
        purpleLight: "#E2C1F9",
        purple: "#A36FFE",
        yellowLight: "#FFFBA8",
        yellow: "#FFC803",
        orange: "#FF8135",
        gray: "#3A3A3A",
        bg: "#10151A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "most-pulse": {
          "100%": {
            opacity: 0,
            transform: "scale(2)",
          },
        },
        "move-up": {
          "0%": { transform: "translateY(0)" }, // Исходное положение (на месте)
          "100%": { transform: "translateY(-100%)" }, // Положение через 2 секунды (-100% по вертикали)
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "most-pulse": "most-pulse 4s ease-out infinite",
        "move-up": "move-up 10s linear forwards", // Анимация движения вверх в течение 2 секунд
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
