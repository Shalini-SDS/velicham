const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF9F5',
          100: '#FFEAE0',
          200: '#FFD4BB',
          300: '#FFBA8E',
          400: '#FF9D5C',
          500: '#FF7D2E',
          600: '#FF6B1A',
          700: '#E5540A',
          800: '#C64205',
          900: '#8B2C00'
        },
        accent: {
          aqua: '#00D9FF',
          gold: '#FFD700',
          blush: '#FF92C2'
        },
        twilight: '#1A2240'
      },
      fontFamily: {
        display: ['"Baloo 2"', ...defaultTheme.fontFamily.sans],
        body: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        comfortaa: ['"Comfortaa"', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        bold: '1.75rem'
      },
      boxShadow: {
        punch: '0 20px 45px rgba(255, 107, 53, 0.4)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(4deg)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        bounceLively: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.5)' },
          '70%': { boxShadow: '0 0 0 25px rgba(0, 217, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 217, 255, 0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        tilt: 'tilt 10s ease-in-out infinite',
        sparkle: 'sparkle 4s ease-in-out infinite',
        bounceLively: 'bounceLively 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite'
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 35%, #FFA726 70%, #FFB74D 100%)',
        section: 'linear-gradient(135deg, #FFF5E6 0%, #FFE0CC 50%, #FFD1A8 100%)',
        sectionWarm: 'linear-gradient(135deg, #FFF3E6 0%, #FFE0C2 50%, #FFD29E 100%)',
        sectionSoft: 'linear-gradient(135deg, #FFF7EF 0%, #FFE8D4 50%, #FFDAB6 100%)',
        sectionDeep: 'linear-gradient(135deg, #FFE3CC 0%, #FFCF9E 50%, #FFB974 100%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
