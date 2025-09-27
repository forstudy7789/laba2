import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#1a1a1a' : '#ffffff',
      text: isDark ? '#ffffff' : '#333333',
      primary: isDark ? '#bb86fc' : '#6200ee',
      secondary: isDark ? '#03dac6' : '#03dac6',
      cardBg: isDark ? '#2d2d2d' : '#f5f5f5',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};