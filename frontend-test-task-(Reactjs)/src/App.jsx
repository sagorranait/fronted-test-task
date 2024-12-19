import { useEffect, useState } from 'react'
import CartModal from './components/CartModal';
import ProductDetails from './components/ProductDetails';
import CheckoutButton from './components/CheckoutButton';

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.color === item.color && cartItem.size === item.size
      );
  
      if (existingItemIndex !== -1) {
        setMessage('This item is updated.');
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
          price: existingItem.price + item.price * item.quantity,
        };
        return updatedCart;
      }
      setMessage('This item is added to the cart.');
      return [...prevCart, item];
    });
  };  

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  return (
    <div className="pt-4 mb-7 lg:mb-0 lg:pt-32 xl:pt-4 2xl:pt-20 lg:h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center p-6 gap-8">
        <ProductDetails message={message} addToCart={addToCart} />        
      </div>
      <CheckoutButton cart={cart} toggleCartModal={toggleCartModal} />

      {showCartModal && (
        <CartModal cart={cart} totalQuantity={totalQuantity} toggleCartModal={toggleCartModal} />
      )}
    </div>
  )
}

export default App
