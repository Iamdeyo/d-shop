import { Link } from 'react-router-dom';
import { data } from '../../static/data';
import styles from '../../styles/styles';
import { useState } from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMinus,
  FiPhone,
  FiPlus,
  FiTwitter,
} from 'react-icons/fi';
import MainLogo from '../MainLogo/MainLogo';

const Footer = () => {
  // Company Shop Support
  const [dropdown, setDropdown] = useState({
    company: false,
    shop: false,
    support: false,
  });

  const paymentBrandsLogo = [
    'https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo-500x281.png',
    'https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo-700x394.png',
    'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-700x394.png',
    'https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo-700x394.png',
  ];
  return (
    <footer className="bg-[#020f1b] text-white">
      <section className={`${styles.section} bg-[#000B14] text-center py-5`}>
        <p className="font-semibold">SUBSCRIBE TO OUR NEWSLETTER</p>
        <p className="text-sm">
          Get the latest updates on new products and upcoming sales
        </p>
        <div className="flex flex-col gap-2 mt-3  sm:gap-4 sm:w-3/5 sm:mx-auto md:flex-row">
          <input
            type="text"
            inputMode="email"
            placeholder="Enter your email address"
            className="p-2 rounded-3xl sm:p-3 w-full"
          />
          <button className="bg-pri p-2 rounded-3xl font-semibold sm:p-3 md:w-2/5">
            Subscribe
          </button>
        </div>
      </section>
      <section
        className={`${styles.section} pb-5 md:flex flex-wrap justify-between`}
      >
        <ul className="w-full pt-5 md:max-w-[240px]">
          <div
            onClick={() => setDropdown({ company: !dropdown.company })}
            className="border-b-2 md:border-none pb-3 mb-3 flex items-center"
          >
            <p className="font-semibold">COMPANY</p>
            <span className="ml-auto md:hidden">
              {dropdown.company ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          <div className={`${dropdown.company ? 'block' : 'hidden'} md:block`}>
            {data.footercompanyLinks.map((link, i) => (
              <li className="text-sm py-2 cursor-pointer" key={i}>
                <p>{link.name}</p>
              </li>
            ))}
          </div>
        </ul>
        <ul className="w-full pt-5 md:max-w-[240px]">
          <div
            onClick={() => setDropdown({ shop: !dropdown.shop })}
            className="border-b-2 md:border-none pb-3 mb-3 flex items-center"
          >
            <p className="font-semibold">SHOP</p>
            <span className="ml-auto md:hidden">
              {dropdown.shop ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          <div className={`${dropdown.shop ? 'block' : 'hidden'} md:block`}>
            {data.footerProductLinks.map((link, i) => (
              <li className="text-sm py-2 cursor-pointer" key={i}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </div>
        </ul>
        <ul className="w-full pt-5 md:max-w-[240px]">
          <div
            onClick={() => setDropdown({ support: !dropdown.support })}
            className="border-b-2 md:border-none pb-3 mb-3 flex items-center"
          >
            <p className="font-semibold">SUPPORT</p>
            <span className="ml-auto md:hidden">
              {dropdown.support ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          <div className={`${dropdown.support ? 'block' : 'hidden'} md:block`}>
            {data.footerSupportLinks.map((link, i) => (
              <li className="text-sm py-2 cursor-pointer" key={i}>
                <p>{link.name}</p>
              </li>
            ))}
          </div>
        </ul>
        <div className="text-pri pt-5 flex flex-col gap-4 w-52">
          <MainLogo />
          <ul className="text-white flex flex-col gap-2 text-sm">
            <li className="flex item-center gap-1">
              <span className="pt-[2px]">
                <FiMapPin size={14} />
              </span>
              <span>Akure, Ondo State, 340110, Nigeria</span>
            </li>
            <li className="flex item-center gap-1">
              <span className="pt-[2px]">
                <FiPhone size={14} />
              </span>
              <span>
                Call us at <a href="tel: +2349060199984"> +234-9060199984 </a>{' '}
              </span>
            </li>
            <li className="flex item-center gap-1">
              <span className="pt-[2px]">
                <FiMail size={14} />
              </span>
              <span>
                Email:{' '}
                <a href="mailto: dtechlord@gmail.com"> dtechlord@gmail.com </a>{' '}
              </span>
            </li>
          </ul>
          <div className="flex gap-2 text-[#ffffff83] cursor-pointer">
            <FiFacebook size={24} /> <FiInstagram size={24} />{' '}
            <FiTwitter size={24} />
          </div>
        </div>
      </section>
      <div
        className={` ${styles.section} flex flex-col items-center gap-3 md:flex-row md:justify-between pb-5 text-sm text-[#f1ecec9c]`}
        style={{ marginBottom: '0' }}
      >
        <p>&copy; 2023 Deyo Tech. All rights reserved.</p>
        <p>Terms - Privacy Policy</p>
        <div className="flex items-center flex-wrap gap-3">
          {paymentBrandsLogo.map((url, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-[5px] object-contain w-[56px]"
            >
              <img
                src={url}
                className="w-full h-full object-contain"
                alt="pay logos"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
