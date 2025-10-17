const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ['class'],
  content: [
    '../../apps/web/app/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#7F5AF0',
          foreground: '#0F0D1A'
        },
        muted: {
          DEFAULT: '#1F1F2E',
          foreground: '#C8C9F0'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addVariant }) => {
      addVariant('supports-backdrop', '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))');
      addVariant('hocus', ['&:hover', '&:focus']);
    })
  ]
};
