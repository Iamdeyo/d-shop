import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard.jsx';

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, '-');
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full border rounded overflow-hidden hover:border-pri">
        <div className="w-full aspect-square">
          <img
            src={data.image_Url[0].url}
            alt="product images"
            className="w-full h-full"
          />
        </div>
        <div className="flex w-full flex-col items-center p-4 font-Sora capitalize text-center ">
          <Link className="text-xs mb-3" to={'/'}>
            {data.shop.name}
          </Link>
          <Link
            className="text-sm font-semibold line-clamp-2"
            to={`/product/${product_name}`}
          >
            {data.name}
          </Link>
          <div className="flex gap-2 mt-3 items-center">
            <p className="text-lg">
              ${data.price === 0 ? data.price : data.discount_price}
            </p>
            <p className="line-through text-red-600 text-sm ">
              {data.price ? '$' + data.price : null}
            </p>
          </div>
          <div className="flex w-full items-center justify-center relative mt-4 mb-3">
            <div className="border absolute left-0 -z-[1]  top-[7px] w-full h-0"></div>
            <div className="flex text-[#ffd700] bg-white">
              <FiStar size={16} fill={data.rating >= 1 ? 'gold' : 'none'} />
              <FiStar size={16} fill={data.rating >= 2 ? 'gold' : 'none'} />
              <FiStar size={16} fill={data.rating >= 3 ? 'gold' : 'none'} />
              <FiStar size={16} fill={data.rating >= 4 ? 'gold' : 'none'} />
              <FiStar size={16} fill={data.rating >= 5 ? 'gold' : 'none'} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 py-3">
            <div className="cursor-pointer" onClick={() => setClick(!click)}>
              {click ? (
                <FiHeart size={20} fill="red" color="red" />
              ) : (
                <FiHeart size={20} />
              )}
            </div>
            <div className="cursor-pointer">
              <FiShoppingCart size={20} />
            </div>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              <FiEye size={20} />
            </div>
          </div>
        </div>
        {open ? (
          <ProductDetailsCard data={data} handleOpen={handleOpen} />
        ) : null}
      </div>
    </>
  );
};
export default ProductCard;
