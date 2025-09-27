import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: colors.primary,
    color: colors.text
  };

  return (
    <header style={headerStyle} className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Магазин</h2>
        </div>
        
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Товары
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cart" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Корзина ({getTotalItems()})
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Панель управления
            </NavLink>
          </li>
        </ul>

        <div className="nav-controls">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            style={{
              backgroundColor: colors.secondary,
              color: colors.text
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;