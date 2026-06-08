export const colors = {
  brand: {
    primary: '#7C5CFC',
    primaryHover: '#6A4AE8',
    primaryActive: '#5A3AD4',
    secondary: '#00D4FF',
    secondaryHover: '#00BFEA',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#F8F8FC',
    100: '#EDEDF5',
    200: '#DCDCE8',
    300: '#C4C4D4',
    400: '#9898B0',
    500: '#6B6B88',
    600: '#4A4A64',
    700: '#2E2E44',
    800: '#1E1E30',
    900: '#12121E',
    950: '#0A0A14',
  },
  success: { light: '#1A3D2B', base: '#22C55E', text: '#86EFAC' },
  warning: { light: '#3D2E0A', base: '#F59E0B', text: '#FCD34D' },
  error: { light: '#3D0A0A', base: '#EF4444', text: '#FCA5A5' },
  info: { light: '#0A1E3D', base: '#3B82F6', text: '#93C5FD' },
};
export const typography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Fira Code', 'Courier New', monospace",
  },
  fontSize: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem',
    xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem',
  },
  fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  lineHeight: { tight: 1.25, normal: 1.5, relaxed: 1.75 },
};
export const spacing = {
  0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
  5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem',
};
export const borderRadius = {
  none: '0', sm: '0.25rem', base: '0.5rem', md: '0.75rem',
  lg: '1rem', xl: '1.5rem', full: '9999px',
};
export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.4)',
  base: '0 4px 12px rgba(0,0,0,0.5)',
  md: '0 8px 24px rgba(0,0,0,0.6)',
  lg: '0 16px 48px rgba(0,0,0,0.7)',
  glow: '0 0 20px rgba(124,92,252,0.4)',
};
export const transitions = { fast: '100ms ease', base: '200ms ease', slow: '300ms ease' };
export const zIndex = { base: 0, raised: 10, dropdown: 100, sticky: 200, overlay: 300, modal: 400, toast: 500 };
