export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
    './src/styles/**/*.scss',
  ],
  darkMode: 'class', // Use 'class' instead of 'selector' if that's your intention
  theme: {
    extend: {
      spacing: {
        '30': '1rem',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #3498db, #9b59b6, #e74c3c, #f1c40f, #2ecc71, #3498db)',
      },
      fontFamily: {
        display: ["Krona One", "sans-serif"],
      }
    },
  },
  plugins: [],
};

