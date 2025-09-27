import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Cart.css';

const Cart = ({ items, onRemoveFromCart }) => {
  const { colors } = useTheme();

  const cartStyle = {
    backgroundColor: colors.cardBg,
    color: colors.text
  };

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div style={cartStyle} className="cart">
        <div className="cart-empty">
          <h3>🛒 Корзина пуста</h3>
          <p>Добавьте товары из каталога</p>
        </div>
      </div>
    );
  }

  return (
    <div style={cartStyle} className="cart">
      <h2>Ваша корзина</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img 
                src={item.image} 
                alt={item.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder">📦</div>
            </div>
            
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">Количество: {item.quantity}</span>
              {item.description && (
                <span className="item-description">{item.description}</span>
              )}
            </div>
            
            <div className="item-controls">
              <span className="item-price">{item.price * item.quantity} ₽</span>
              <button 
                onClick={() => onRemoveFromCart(item.id)}
                className="remove-btn"
                style={{ backgroundColor: colors.primary, color: colors.text }}
              >
                ❌ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <strong>Итого: {totalPrice.toLocaleString('ru-RU')} ₽</strong>
      </div>
      
      <div className="cart-actions">
        <button 
          className="checkout-btn"
          style={{ backgroundColor: colors.primary, color: colors.text }}
        >
          💳 Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Cart;