import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';

const CartPage = () => {
  const { colors } = useTheme();
  const { items, removeFromCart } = useCart();

  const pageStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem'
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Корзина покупок</h1>
        <Cart items={items} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default CartPage;