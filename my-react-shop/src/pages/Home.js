import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { colors } = useTheme();

  const pageStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem'
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Добро пожаловать в наш магазин!</h1>
        <p>Здесь вы найдете лучшие товары по выгодным ценам.</p>
      </div>
    </div>
  );
};

export default Home;