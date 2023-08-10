import {
  FiBookmark,
  FiChevronRight,
  FiCreditCard,
  FiLogOut,
  FiMail,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';
import { PiAddressBook } from 'react-icons/pi';
import { MdTrackChanges } from 'react-icons/md';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { useState } from 'react';
import axios from 'axios';
import { server } from '../../../server';
import { toast } from 'react-toastify';

const ProfileSideBar = ({ active, setActive }) => {
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.replace('/login');
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const [show, setShow] = useState(false);
  const sideBarItems = [
    {
      id: 1,
      name: 'Profile',
      icon: <FiUser />,
    },
    {
      id: 2,
      name: 'Orders',
      icon: <FiShoppingBag />,
    },
    {
      id: 3,
      name: 'Refunds',
      icon: <HiOutlineReceiptRefund />,
    },
    {
      id: 4,
      name: 'Indox',
      icon: <FiMail />,
    },
    {
      id: 5,
      name: 'Track Order',
      icon: <MdTrackChanges />,
    },
    {
      id: 6,
      name: 'Payment Methods',
      icon: <FiCreditCard />,
    },
    {
      id: 7,
      name: 'Address',
      icon: <PiAddressBook />,
    },
  ];
  return (
    <div
      className={`flex flex-col bg-[#f5f5f5] z-10 h-full w-screen absolute duration-500 ease-in-out transition-all top-0  ${
        show ? 'left-0' : '-left-[100vw]'
      } md:static md:max-w-[250px] md:mt-[38px] md:rounded-3xl md:h-full md:transition-none md:ml-4`}
    >
      {sideBarItems.map((item) => (
        <div
          key={item.id}
          className={`flex px-3 py-3 items-center gap-3 text-lg cursor-pointer ${
            active === item.id && 'text-pri'
          }`}
          onClick={() => {
            setActive(item.id);
            setShow(false);
          }}
        >
          <span>{item.icon}</span>
          <span> {item.name} </span>
        </div>
      ))}
      <div
        className={`flex px-3 py-3 items-center gap-3 text-lg cursor-pointer`}
        onClick={logoutHandler}
      >
        <span>
          <FiLogOut />
        </span>
        <span> Log out </span>
      </div>
      <span
        onClick={() => setShow(true)}
        className="bg-pri absolute top-0 -right-[36px] md:hidden"
      >
        <FiChevronRight size={36} />
      </span>
    </div>
  );
};
export default ProfileSideBar;
