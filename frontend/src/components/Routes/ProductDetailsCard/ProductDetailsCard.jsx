import { useState } from 'react';
import {
  FiCircle,
  FiHeart,
  FiMessageSquare,
  FiMinus,
  FiPlus,
  FiX,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductDetailsCard = ({ data, handleOpen }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const [imgIndex, setImgImdex] = useState(0);

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const handleIncrement = () => {
    if (count < data.stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-[#0000005d] w-screen h-full min-h-screen fixed left-0 top-0 z-50 p-6">
      <div className="flex flex-col gap-6 bg-white mx-auto rounded-xl overflow-hidden overflow-y-auto relative max-w-5xl h-full md:mt-14 md:overflow-y-hidden md:h-[420px] max-h-full md:flex-row md:py-6 md:pr-6">
        <div className="w-full md:w-1/2 lg:w-3/5 aspect-square relative  ">
          <img
            src={data.image_Url[imgIndex].url}
            className="w-full h-full object-contain"
            alt="Product image"
          />
          <div className="flex gap-1 justify-center absolute w-full left-0 bottom-3">
            {data.image_Url.map((img, i) => (
              <div key={i} onClick={() => setImgImdex(i)}>
                <FiCircle
                  size={12}
                  className={`${
                    imgIndex === i
                      ? 'fill-pri text-pri'
                      : 'fill-gray-400 text-gray-400'
                  }  cursor-pointer`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col p-4 md:overflow-hidden md:overflow-y-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <img
                src={data.shop.shop_avatar.url}
                alt="shop logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{data.shop.name}</p>
                <p>({data.shop.ratings}) ratings</p>
              </div>
            </div>

            <div className="flex items-center bg-dark pt font-semibold my-4 text-white w-fit h-10 rounded-lg gap-2 px-3 hover:bg-black cursor-pointer">
              Send Message <FiMessageSquare size={20} className="mt-1" />
            </div>
          </div>
          <p className="text-xl font-semibold">{data.name}</p>
          <p className="text-base">{data.description}</p>
          <div className="flex gap-2 mt-4 items-center">
            <p className="text-xl font-semibold">
              ${data.price === 0 ? data.price : data.discount_price}
            </p>
            <p className="line-through text-red-600 text-sm ">
              {data.price ? '$' + data.price : null}
            </p>
          </div>
          <div className="flex flex-none items-center my-4 border h-[42px] w-fit text-lg rounded-[40px] overflow-hidden">
            <span
              onClick={handleDecrement}
              className="p-3 cursor-pointer border-r"
            >
              <FiMinus />
            </span>
            <p className="px-3">{count}</p>
            <span
              onClick={handleIncrement}
              className="p-3 cursor-pointer border-l"
            >
              <FiPlus />
            </span>
          </div>
          <div>
            <div className="bg-pri w-full rounded-[40px] p-3 font-bold text-center mb-4 text-white hover:opacity-80">
              ADD TO CART
            </div>
            {click ? (
              <div
                onClick={() => setClick(false)}
                className="flex items-center justify-center gap-2"
              >
                <FiHeart fill="red" color="red" /> Added to Wish List
              </div>
            ) : (
              <div
                onClick={() => setClick(true)}
                className="flex items-center justify-center gap-2"
              >
                <FiHeart /> Add to Wish List
              </div>
            )}
          </div>
          <div
            onClick={handleOpen}
            className="cursor-pointer border border-transparent fixed right-7 z-10 top-7 hover:border-red-600 md:absolute md:top-2 md:right-2"
          >
            <FiX size={24} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsCard;
