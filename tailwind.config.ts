import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(0.8rem, -0.08vw + 0.82rem, 0.75rem)",
        base: "clamp(1rem, 0vw + 1rem, 1rem)",
        lg: "clamp(1.25rem, 0.13vw + 1.22rem, 1.33rem)",
        xl: "clamp(1.56rem, 0.34vw + 1.48rem, 1.78rem)",
        "2xl": "clamp(1.95rem, 0.66vw + 1.79rem, 2.37rem)",
        "3xl": "clamp(2.44rem, 1.15vw + 2.16rem, 3.16rem)",
        "4xl": "clamp(3.05rem, 1.85vw + 2.59rem, 4.21rem)",
        "5xl": "clamp(3.81rem, 2.87vw + 3.1rem, 5.61rem)",
        "6xl": "clamp(4.77rem, 4.34vw + 3.68rem, 7.48rem)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
