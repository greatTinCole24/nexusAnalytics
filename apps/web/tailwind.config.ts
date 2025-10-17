import type { Config } from 'tailwindcss';
import preset from '../../packages/config/tailwind/preset.cjs';

const config: Config = {
  presets: [preset as never],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(2%)' }
        }
      },
      animation: {
        float: 'float 10s ease-in-out infinite'
      }
    }
  }
};

export default config;
