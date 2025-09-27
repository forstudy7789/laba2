import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pageStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem'
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Редирект после успешного входа
    navigate('/dashboard');
  };

  if (!isLoggedIn) {
    return (
      <div style={pageStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1>Вход в систему</h1>
          <button 
            onClick={handleLogin}
            style={{
              backgroundColor: colors.primary,
              color: colors.text,
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Панель управления</h1>
        <p>Добро пожаловать в панель управления!</p>
      </div>
    </div>
  );
};

export default Dashboard;