import { useState } from 'react';

export const AddToCartButton = ({ productId }) => {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
console.log('Добавляем товар в корзину с ID:', productId);
    setInCart(true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={inCart}
      className={`w-full py-2 text-white font-medium transition-colors ${
        inCart
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {inCart ? 'В корзине' : 'В корзину'}
    </button>
  );
  
};