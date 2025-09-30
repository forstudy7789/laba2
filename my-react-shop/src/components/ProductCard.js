import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { colors, isDark } = useTheme();

  const cardStyle = {
    backgroundColor: colors.cardBg,
    color: colors.text,
    border: `1px solid ${isDark ? '#444' : '#ddd'}`,
    boxShadow: isDark ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    backgroundColor: colors.primary,
    color: colors.text,
    border: 'none'
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const placeholder = e.target.nextElementSibling;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <div style={cardStyle} className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          onError={handleImageError}
          className="product-img"
          loading="lazy"
        />
        <div className="image-placeholder">
          <span>📷</span>
          <p>Изображение товара</p>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        
        <div className="product-price-section">
          <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
          <button 
            style={buttonStyle}
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            🛒 В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;