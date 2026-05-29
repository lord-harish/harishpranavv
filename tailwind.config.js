/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        midnight: '#0B1120',
        neon: '#00FF9D',
        electric: '#00D9FF',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(0,255,157,0.25)',
        electric: '0 0 40px rgba(0,217,255,0.24)',
        glass: '0 24px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 20% 20%, rgba(0,255,157,0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(0,217,255,0.18), transparent 32%)',
      },
    },
  },
  plugins: [],
};
