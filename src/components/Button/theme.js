export const buttonTheme = {
  colors: {
    primary: {
      background: '#78C83D',
      border: '#50A015',
      text: '#FFFFFF',
    },
    secondary: {
      border: 'color(display-p3 0.2275 0.2745 0.3059)',
      borderFallback: '#37464F',
      text: '#FFFFFF',
    },
  },
  sizes: {
    height: '53px',
    padding: {
      default: '16px 24px',
      icon: '16px 24px 21px 24px',
    },
    borderRadius: '20px',
    borderWidth: {
      default: '2px',
      bottom: '8px',
      bottomPressed: '6px',
    },
  },
  animation: {
    transition: 'all 0.2s ease',
    hover: 'translateY(-1px)',
    active: 'translateY(2px)',
  },
};
