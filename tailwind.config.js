/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--color-border))", // slate-200
        input: "rgb(var(--color-input))", // slate-50
        ring: "rgb(var(--color-ring))", // soft blue
        background: "rgb(var(--color-background))", // very light blue-gray
        foreground: "rgb(var(--color-foreground))", // slate-800
        primary: {
          DEFAULT: "rgb(var(--color-primary))", // soft blue from NARSA logo
          foreground: "rgb(var(--color-primary-foreground))", // white
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))", // soft yellow from NARSA logo
          foreground: "rgb(var(--color-secondary-foreground))", // slate-600
        },
        destructive: {
          DEFAULT: "rgb(var(--color-destructive))", // red-500
          foreground: "rgb(var(--color-destructive-foreground))", // white
        },
        muted: {
          DEFAULT: "rgb(var(--color-muted))", // slate-100
          foreground: "rgb(var(--color-muted-foreground))", // slate-500
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent))", // light yellow
          foreground: "rgb(var(--color-accent-foreground))", // slate-600
        },
        popover: {
          DEFAULT: "rgb(var(--color-popover))", // white
          foreground: "rgb(var(--color-popover-foreground))", // slate-800
        },
        card: {
          DEFAULT: "rgb(var(--color-card))", // white
          foreground: "rgb(var(--color-card-foreground))", // slate-800
        },
        success: {
          DEFAULT: "rgb(var(--color-success))", // teal-500
          foreground: "rgb(var(--color-success-foreground))", // white
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning))", // yellow-400
          foreground: "rgb(var(--color-warning-foreground))", // slate-600
        },
        error: {
          DEFAULT: "rgb(var(--color-error))", // red-500
          foreground: "rgb(var(--color-error-foreground))", // white
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)", // 8px
        md: "var(--radius-md)", // 16px
        lg: "var(--radius-lg)", // 32px
        xl: "var(--radius-xl)", // 48px
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: "clamp(3rem, 8vw, 7rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(46, 125, 50, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(46, 125, 50, 0.6)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};