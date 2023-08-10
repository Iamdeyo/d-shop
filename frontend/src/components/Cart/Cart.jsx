import { useState } from 'react';
import {
  FiMinus,
  FiPlus,
  FiPlusCircle,
  FiShoppingBag,
  FiX,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = ({ toggleCart }) => {
  const cartData = [
    {
      id: 1,
      name: 'MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty',
      description:
        'Product details are a crucial part of any eCommerce website or online marketplace.',
      price: 1099,
      url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    },
    {
      id: 2,
      name: 'MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty',
      description:
        'Product details are a crucial part of any eCommerce website or online marketplace.',
      price: 1099,
      url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    },
    {
      id: 3,
      name: 'MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty',
      description:
        'Product details are a crucial part of any eCommerce website or online marketplace.',
      price: 1099,
      url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    },
    {
      id: 4,
      name: 'MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty',
      description:
        'Product details are a crucial part of any eCommerce website or online marketplace.',
      price: 1099,
      url: 'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg',
    },
  ];
  return (
    <div className="fixed top-0 left-0 bg-[#0000004b] h-screen w-full z-50">
      <div className="fixed w-full max-w-xs h-screen bg-white shadow-lg top-0 right-0 flex flex-col py-4">
        <div className="ml-auto p-1" onClick={toggleCart}>
          <FiX size={30} />
        </div>
        <div className="flex items-center gap-2 px-3 py-6">
          <span>
            <FiShoppingBag size={24} />
          </span>
          <p className="text-lg font-semibold">30 items</p>
        </div>
        <div className="border-y-2 h-full overflow-x-hidden overflow-y-auto">
          {cartData.map((cart) => (
            <SingleCart key={cart.id} data={cart} />
          ))}
        </div>
        <div className="px-3 pt-6 pb-3 w-full">
          <Link
            to={'/checkout'}
            className="bg-red-500 block text-center py-3 font-bold rounded-lg px-2 text-white hover:bg-red-400"
          >
            Checkout Now (US$3300)
          </Link>
        </div>
      </div>
    </div>
  );
};

const SingleCart = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  return (
    <div className="border-b-2 flex items-center gap-1 px-3 py-4 hover:bg-gray-100">
      <div className="flex gap-1 flex-col items-center">
        <span
          onClick={increment}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white cursor-pointer"
        >
          <FiPlus size={24} />
        </span>
        <span>{value}</span>
        <span
          onClick={decrement}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-300 text-gray-500 cursor-pointer"
        >
          <FiMinus size={24} />
        </span>
      </div>
      <div className="w-20 flex-none">
        <img
          src={data.url}
          alt="product img"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-xs font-Sora">
        <p className="">{data.name}</p>
        <p className="mt-2 text-gray-500 font-bold">
          ${data.price} X {value}
        </p>
        <p className="text-red-500 font-bold text-sm mt-1">US${totalPrice}</p>
      </div>
      <span className="cursor-pointer text-gray-400">
        <FiX />
      </span>
    </div>
  );
};
export default Cart;
