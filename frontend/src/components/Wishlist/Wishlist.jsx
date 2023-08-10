import { FiHeart, FiX } from 'react-icons/fi';
import { MdAddShoppingCart } from 'react-icons/md';

const Wishlist = ({ toggleWishlist }) => {
  const WishlistData = [
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
        <div className="ml-auto p-1" onClick={toggleWishlist}>
          <FiX size={30} />
        </div>
        <div className="flex items-center gap-2 px-3 py-6">
          <span>
            <FiHeart size={24} />
          </span>
          <p className="text-lg font-semibold">3 items</p>
        </div>
        <div className="border-t-2 h-full overflow-x-hidden overflow-y-auto">
          {WishlistData.map((list) => (
            <SingleWishlist key={list.id} data={list} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleWishlist = ({ data }) => {
  return (
    <div className="border-b-2 flex items-center gap-2 px-3 py-4 hover:bg-gray-100">
      <span className="cursor-pointer text-gray-400">
        <FiX />
      </span>
      <div className="w-20 flex-none">
        <img
          src={data.url}
          alt="product img"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-xs font-Sora">
        <p>{data.name}</p>

        <p className="text-red-500 font-bold text-sm mt-2">US${data.price}</p>
      </div>
      <span className="cursor-pointer text-gray-500 hover:text-pri">
        <MdAddShoppingCart size={24} />
      </span>
    </div>
  );
};
export default Wishlist;
