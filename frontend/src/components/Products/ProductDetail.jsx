import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

const ProductDetail = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [selectImg, setSelectImg] = useState(0);
  const navigate = useNavigate();

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

  const handleSendMessage = () => {
    navigate('/messages?chatId=56wegdywdtrwe6ry7wfkys7');
  };

  return (
    <section className={styles.section}>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col items-center gap-8 md:w-1/2 lg:w-2/5">
          <div className="w-full h-full">
            <img
              src={data.image_Url[selectImg].url}
              alt="product image"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center gap-6">
            {data.image_Url.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectImg(i)}
                className={`${
                  selectImg === i
                    ? 'border-pri'
                    : 'border-transparent hover:border-gray-100'
                } border-2 p-2 cursor-pointer `}
              >
                <img
                  src={img.url}
                  alt="product image"
                  className="h-20 w-20 object-contain md:h-28 md:w-28"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:h-3/5">
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
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="bg-pri w-full rounded-[40px] p-3 font-bold text-center mb-4 lg:mb-0 text-white lg:w-52 hover:opacity-80">
              ADD TO CART
            </div>

            {click ? (
              <div
                onClick={() => setClick(false)}
                className="flex items-center justify-center gap-2 border w-full rounded-[40px] p-3 lg:w-52"
              >
                <FiHeart fill="red" color="red" /> Added to Wish List
              </div>
            ) : (
              <div
                onClick={() => setClick(true)}
                className="flex items-center justify-center gap-2 w-full border rounded-[40px] p-3 lg:w-52"
              >
                <FiHeart /> Add to Wish List
              </div>
            )}
          </div>
          <div className="flex mt-4 gap-5 flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-3 items-center ">
              <div>
                <img
                  src={data.shop.shop_avatar.url}
                  alt="shop logo"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div className="text-lg">
                <p className="mb-2 font-semibold text-green-600">
                  {data.shop.name}
                </p>
                <p>({data.shop.ratings}) Ratings</p>
              </div>
            </div>
            <div
              className="px-4 h-[40px] bg-purple-600 text-white flex items-center gap-3 w-fit rounded-lg hover:bg-purple-500"
              onClick={handleSendMessage}
            >
              <span className="text-lg">Send Message</span>
              <HiOutlineChatBubbleOvalLeftEllipsis size={24} />
            </div>
          </div>
        </div>
      </div>
      <ProductDetailInfo data={data} />
    </section>
  );
};

const ProductDetailInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f5f5] mt-11 px-2 md:px-4 rounded-lg min-h-[40vh]">
      <div className="border-b flex justify-between">
        <div className="text-center text-lg" onClick={() => setActive(1)}>
          <p
            className={`${
              active === 1 ? 'border-red-400' : ' border-transparent'
            } px-1 py-2 border-b-4`}
          >
            Product Detail
          </p>
        </div>
        <div className="text-center text-lg" onClick={() => setActive(2)}>
          <p
            className={`${
              active === 2 ? 'border-red-400' : ' border-transparent'
            } px-1 py-2 border-b-4`}
          >
            Product Review
          </p>
        </div>
        <div className="text-center text-lg" onClick={() => setActive(3)}>
          <p
            className={`${
              active === 3 ? 'border-red-400' : ' border-transparent'
            } px-1 py-2 border-b-4`}
          >
            Seller Infomation
          </p>
        </div>
      </div>
      {active === 1 ? (
        <div>
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maxime laborum, minima praesentium temporibus eveniet reprehenderit
            aspernatur accusantium nam sit cum numquam cupiditate, voluptates
            ullam, deserunt laudantium veniam tempore qui.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maxime laborum, minima praesentium temporibus eveniet reprehenderit
            aspernatur accusantium nam sit cum numquam cupiditate, voluptates
            ullam, deserunt laudantium veniam tempore qui.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            maxime laborum, minima praesentium temporibus eveniet reprehenderit
            aspernatur accusantium nam sit cum numquam cupiditate, voluptates
            ullam, deserunt laudantium veniam tempore qui.
          </p>
          <br />
          <br />
        </div>
      ) : null}
      {active === 2 ? (
        <div>
          <br />

          <p className="text-center">No Review yet</p>

          <br />
        </div>
      ) : null}
      {active === 3 ? (
        <div className="flex flex-col gap-5 pt-7 md:flex-row lg:justify-between">
          <div className="lg:w-1/2">
            <div className="flex gap-3 items-center mb-3">
              <div>
                <img
                  src={data.shop.shop_avatar.url}
                  alt="shop logo"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div className="text-lg">
                <p className="mb-2 font-semibold text-green-600">
                  {data.shop.name}
                </p>
                <p>({data.shop.ratings}) Ratings</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quisquam nobis provident perferendis nihil soluta illo eum. Odit,
              quidem alias.
            </p>
          </div>
          <div className="font-medium flex-none">
            <p>
              Joined On: <span className="font-normal"> 29 July, 2022 </span>
            </p>
            <p>
              Total Products: <span className="font-normal"> 1,221 </span>
            </p>
            <p>
              Total Reviews: <span className="font-normal"> 131 </span>
            </p>

            <Link
              to={'/'}
              className="px-3 py-2 bg-gray-900 text-white rounded-md mt-3 inline-block hover:bg-gray-800"
            >
              visit shop
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ProductDetail;
