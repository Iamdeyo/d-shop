import { useState } from 'react';
import { FiCamera, FiTrash } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdTrackChanges } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ProfileContent = ({ active, setActive }) => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState(user && user.email);
  const [fullname, setFullname] = useState(user && user.name);
  const [zipCode, setZipCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full mt-[38px] px-4 overflow-hidden mb-8">
      {/* profile */}
      {active === 1 ? (
        <form onSubmit={handleSumbit} className="flex flex-col w-full">
          <div className="self-center relative rounded-full border-green-500 border-4">
            <img
              src={
                avatar
                  ? URL.createObjectURL(avatar)
                  : `http://localhost:8080/${user?.avatar}`
              }
              alt="Profile Pics"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <label
              className="absolute cursor-pointer bottom-0 right-0 p-2 bg-[#f5f5f5] rounded-full hover:text-pri"
              htmlFor="avatar"
            >
              <FiCamera />
            </label>
            <input
              type="file"
              name="avatar"
              onChange={(e) => setAvatar(e.target.files[0])}
              accept=".jpg,.jpeg,.png"
              id="avatar"
              style={{ display: 'none' }}
            />
          </div>
          <div className="flex flex-col gap-1 mt-6 md:grid md:grid-cols-2 md:gap-x-10">
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                autoComplete="name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="Email">
                Email Address
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                inputMode="number"
                autoComplete="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="zipCode">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                autoComplete="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="Address">
                Address 1
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                autoComplete="Address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
            <div className="h-[70px] flex flex-col relative mb-5">
              <label className="text-lg font-medium" htmlFor="Address">
                Address 2
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                autoComplete="Address"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className={`${styles.auth_input} pl-1`}
              />
            </div>
          </div>
          <button className="bg-pri text-white py-2 font-medium text-lg rounded-lg mt-4 px-20 hover:opacity-80 md:w-fit">
            Update
          </button>
        </form>
      ) : null}
      {active === 2 ? <AllOrders /> : null};
      {active === 3 ? <AllRefundOrders /> : null}
      {active === 5 ? <TrackOrder /> : null}
      {active === 6 ? <PaymentMethod /> : null}
      {active === 7 ? <Address /> : null}
    </div>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: '623ydw6r4rh34uir3dhu344',
      orderItems: [
        {
          name: 'Iphone 14 pro max',
        },
      ],
      totalPrice: 120,
      orderStatus: 'Processing',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },

    {
      field: 'status',
      headerName: 'Status',
      minWidth: 130,
      flex: 0.7,
      cellClassName: 'redColor',
      //  (params) => {
      //   return params.getValue(params.id, 'status') === 'Delivered'
      //     ? 'greenColor'
      //     : 'redColor';
      // },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: ' ',
      flex: 1,
      minWidth: 150,
      headerName: '',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: 'US$ ' + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: '623ydw6r4rh34uir3dhu344',
      orderItems: [
        {
          name: 'Iphone 14 pro max',
        },
      ],
      totalPrice: 120,
      orderStatus: 'Processing',
    },
    {
      _id: 'se3445tfdhf6r474eetr4',
      orderItems: [
        {
          name: 'Iphone 13 pro',
        },
      ],
      totalPrice: 320,
      orderStatus: 'Processing refund',
    },
  ];
  const eligibleOrders =
    orders && orders.filter((item) => item.orderStatus === 'Processing refund');

  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },

    {
      field: 'status',
      headerName: 'Status',
      minWidth: 130,
      flex: 0.7,
      cellClassName: 'redColor',
      //  (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: ' ',
      flex: 1,
      minWidth: 150,
      headerName: '',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  eligibleOrders &&
    eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: 'US$ ' + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  const orders = [
    {
      _id: '623ydw6r4rh34uir3dhu344',
      orderItems: [
        {
          name: 'Iphone 14 pro max',
        },
      ],
      totalPrice: 120,
      orderStatus: 'Processing',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth: 150, flex: 0.7 },

    {
      field: 'status',
      headerName: 'Status',
      minWidth: 130,
      flex: 0.7,
      cellClassName: 'redColor',
      //  (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: ' ',
      flex: 1,
      minWidth: 150,
      headerName: '',
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: 'US$ ' + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <p className="text-2xl font-semibold">Payment Methods</p>
        <span className="py-2 px-6 rounded-lg bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
          Add new
        </span>
      </div>
      <div className="w-full mt-10 bg-[#f5f5f5] h-[70px] rounded flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <p className="pl-5 font-semibold"> Ademola Taiwo </p>
        </div>
        <div className="pl-8 text-xs flex items-center">
          <p> 1234 **** **** **** </p>
          <p className="pl-6"> 08/22 </p>
        </div>
        <div>
          <FiTrash />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <p className="text-2xl font-semibold">My Addresses</p>
        <span className="py-2 px-6 rounded-lg bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
          Add new
        </span>
      </div>
      <div className="w-full mt-10 bg-[#f5f5f5] h-[70px] rounded flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <p className="pl-5 font-semibold"> Default </p>
        </div>
        <div className=" lg:pl-8 text-xs flex items-center">
          <p> 24, Adebanjo street, Nigeria </p>
          <p className="pl-6"> +(234) 9060089197 </p>
        </div>
        <div>
          <FiTrash />
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
