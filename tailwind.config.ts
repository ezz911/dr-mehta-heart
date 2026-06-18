import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
      content: ["./index.html", "./src/**/*.{ts,tsx}"],
      theme: {
    container: {
      center: true,
              padding: "2rem",
              screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        serif: ["Cardo", "Times New Roman", "serif"],
                  sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
          },
                colors: {
        border: "hsl(var(--border))",
                  input: "hsl(var(--input))",
                  ring: "hsl(var(--ring))",
                  background: "hsl(var(--background))",
                  foreground: "hsl(var(--foreground))",
                  frost: "hsl(var(--frost))",
                  lavender: "hsl(var(--lavender))",
                  "primary-glow": "hsl(var(--primary-glow))",
                  "primary-deep": "hsl(var(--primary-deep))",
                  primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
                  secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
                            muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
                                      accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
                                                card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
                                                          midnight: { DEFAULT: "hsl(var(--midnight))", foreground: "hsl(var(--midnight-foreground))" },
                                                                    vitality: { DEFAULT: "hsl(var(--vitality))", foreground: "hsl(var(--vitality-foreground))" },
                                                                              alert: { DEFAULT: "hsl(var(--alert))", foreground: "hsl(var(--alert-foreground))" },
        },
      borderRadius: {
        lg: "var(--radius)",
                  md: "calc(var(--radius) - 2px)",
                  sm: "calc(var(--radius) - 4px)",
          },
                keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "pulse-soft": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.6" } },
                      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both",
                  "fade-in": "fade-in 1s ease-out both",
                  "pulse-soft": "pulse-soft 3s ease-in-out infinite",
          },
                },
      },
  plugins: [require("tailwindcss-animate")],
    } satisfies Config;
