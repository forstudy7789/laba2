import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import ProductList from '../components/ProductList';

const Products = () => {
  const { colors } = useTheme();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const pageStyle = {
    backgroundColor: colors.background,
    color: colors.text,
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem'
  };

  // Данные товаров с внешними изображениями
  const products = [
    { 
      id: 1, 
      name: 'Смартфон iPhone 14', 
      price: 79990,
      image: 'https://cdn1.ozone.ru/s3/multimedia-2/c600/6593602070.jpg',
      description: 'Новый iPhone с улучшенной камерой'
    },
    { 
      id: 2, 
      name: 'Ноутбук MacBook Pro', 
      price: 149990,
      image: 'https://cdn0.youla.io/files/images/780_780/64/59/645934da4d3c9742e706c4d7-1.jpg',
      description: 'Мощный ноутбук для работы и творчества'
    },
    { 
      id: 3, 
      name: 'Наушники AirPods Pro', 
      price: 19990,
      image: 'https://avatars.mds.yandex.net/get-mpic/6237625/2a0000019536e7635be171c19fbf7483548a/orig',
      description: 'Беспроводные наушники с шумоподавлением'
    },
    { 
      id: 4, 
      name: 'Часы Apple Watch', 
      price: 29990,
      image: 'https://cdn1.ozone.ru/s3/multimedia-m/c600/6315459094.jpg',
      description: 'Умные часы для здоровья и спорта'
    },
    { 
      id: 5, 
      name: 'Планшет iPad Air', 
      price: 49990,
      image: 'https://avatars.mds.yandex.net/get-mpic/12225808/2a000001961a56b8e861fd0163cdff5abb4c/orig',
      description: 'Универсальный планшет для всей семьи'
    },
    { 
      id: 6, 
      name: 'Игровая консоль PlayStation 5', 
      price: 59990,
      image: 'https://avatars.mds.yandex.net/i?id=1605f1192c39a35626f154708a37b0f2_l-10700734-images-thumbs&n=13',
      description: 'Новейшая игровая консоль от Sony'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // Можно добавить уведомление
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Каталог товаров</h1>
        <p style={{ marginBottom: '2rem', color: colors.text }}>
          Выберите товары из нашего каталога
        </p>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Products;