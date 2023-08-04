import {
  FiArrowLeft,
  FiHeart,
  FiHome,
  FiMenu,
  FiSearch,
  FiShoppingCart,
} from 'react-icons/fi';
import MainLogo from '../MainLogo/MainLogo';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu.jsx';
import { data } from '../../static/data';
import SearchBar from './SeachBar.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { server } from '../../../server';

const Header = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <section>
      <div className="bg-pri">
        <nav className=" text-white flex items-center h-14 justify-between py-2 pr-4 lg:container max-w-7xl mx-auto">
          <div className="flex items-center gap-4 px-2 md:hidden">
            <span onClick={toggleMenu}>
              <FiMenu size={24} />
            </span>
            <Link to={'/'}>
              <MainLogo />
            </Link>
          </div>
          <div className="items-center pl-2 gap-8 hidden md:flex">
            {data &&
              data.navItems.map((nav) => (
                <Link key={nav.url} to={nav.url} className="text-sm">
                  {nav.title}
                </Link>
              ))}
          </div>
          {/* mobile menu */}
          {menu && <MobileMenu toggleMenu={toggleMenu} />}
          {user ? (
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiHeart size={24} />
                <span className="absolute -top-2 -right-1 w-4 text-center h-4 text-[8px] bg-green-600 rounded-full py-[2px]">
                  0
                </span>
              </div>
              <div className="relative">
                <FiShoppingCart size={24} />
                <span className="absolute -top-2 -right-1 w-4 text-center h-4 text-[8px] bg-green-600 rounded-full py-[2px]">
                  0
                </span>
              </div>
              <div className="">
                <img
                  src={`http://localhost:8080/${user.avatar}`}
                  alt="Profile Pics"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center h-full gap-4 text-[12.8px]">
              <Link to={'/login'} className="hover:underline">
                Login
              </Link>
              <span className="h-1/2 border opacity-30"></span>
              <Link to={'/sign-up'} className="hover:underline">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      <div className="bg-white shadow-lg">
        <div className="lg:container pr-4 max-w-7xl h-16 mx-auto flex items-center gap-8 py-2">
          <Link className="text-pri flex-none pl-2 hidden md:block" to={'/'}>
            <MainLogo />
          </Link>
          <SearchBar />
          <Link
            className="text-white px-4 text-sm py-3 flex-none rounded-xl bg-dark hover:bg-[#08b059] hidden md:block"
            to={'/seller'}
          >
            Sell on Kusnap
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Header;
