import { FiArrowLeft } from 'react-icons/fi';
import { data } from '../../static/data';
import { Link } from 'react-router-dom';
// import { categoriesData } from '../../static/data.js';

const MobileMenu = ({ toggleMenu }) => {
  console.log(data);
  return (
    <div
      className="z-50 absolute md:hidden bg-[#00000080] w-screen left-0 top-0 h-screen"
      onClick={toggleMenu}
    >
      <div
        className="p-4 bg-white w-full text-dark max-w-[280px] h-full overflow-x-hidden overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="text-pri border-b pb-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <FiArrowLeft size={24} />
        </div>
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Navgation</p>
          </div>
          <div className="mt-3 h-full flex flex-col gap-2 pb-4 border-b">
            {data.navItems &&
              data.navItems.map((nav) => (
                <Link
                  to={`${nav.url}`}
                  key={nav.id}
                  className="font-medium flex gap-2 items-center transition hover:text-pri"
                >
                  <p>{nav.title}</p>
                </Link>
              ))}
          </div>
        </div>
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">My Categories</p>
            <span className="text-pri text-sm hover:underline cursor-pointer">
              View all
            </span>
          </div>
          <div className="mt-3 h-full flex flex-col gap-2 pb-4 border-b">
            {data.categoriesData &&
              data.categoriesData.map((ct) => (
                <Link
                  to={`/products?category=${ct.title}`}
                  key={ct.id}
                  className=" flex gap-2 items-center "
                >
                  <img src={ct.image_Url} alt="catImage" className="w-5 h-5" />

                  <p>{ct.title}</p>
                </Link>
              ))}
          </div>
          <div className="flex flex-col text-center gap-2 pt-4">
            <Link
              className="text-white text-sm py-3 rounded-xl bg-dark hover:bg-[#08b059]"
              to={'/seller'}
            >
              Sell on Kusnap
            </Link>
            <div className="text-sm py-3 rounded-xl hover:underline ">
              Contact Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
