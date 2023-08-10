import styles from '../../styles/styles';
import MainLogo from '../MainLogo/MainLogo';
import { FiArrowLeft, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../../server';
import { toast } from 'react-toastify';

const ShopCreate = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [hidPassword, setHidpassword] = useState(true);

  const handleHidPassword = () => {
    setHidpassword(!hidPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    const newForm = new FormData();

    newForm.append('file', avatar);
    newForm.append('name', name);
    newForm.append('email', email);
    newForm.append('password', password);
    newForm.append('address', address);
    newForm.append('phoneNumber', phoneNumber);
    newForm.append('zipCode', zipCode);

    axios
      .post(`${server}/shop/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setEmail('');
        setName('');
        setPassword('');
        setAddress('');
        setPhoneNumber('');
        setZipCode('');
        setAvatar(null);
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <div className=" bg-[#F4FBFF] min-h-screen flex sm:items-center sm:justify-center sm:p-16">
      <div className="bg-white pb-12 w-full mx-auto sm:max-w-[500px] sm:rounded-2xl sm:py-8 sm:shadow-2xl">
        <div className={`${styles.noramlFlex} justify-center relative pt-1`}>
          <span
            className="text-[#535353] absolute left-4 sm:left-11  top-1/2 -translate-y-1/2 border border-transparent p-1 rounded-full hover:border-[#d3d3d3]"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft size={24} />
          </span>
          <MainLogo />
        </div>
        <div className="p-6 flex flex-col gap-6 sm:px-12">
          <p className="text-[#263238] text-lg font-semibold text-center">
            Register as a seller
          </p>
          <p className="text-center text-sm opacity-75 -mt-4">
            Join thousands of users buying and selling <br /> products on D-shop
            daily.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="h-[50px] relative mb-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${styles.auth_input} pl-5`}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Shop Name
              </span>
            </div>
            {name.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-5 -mt-4 text-xs italic text-red-600`}
              >
                {' '}
                <FiAlertCircle /> Full Name is required!
              </span>
            )}
            <div className="h-[50px] relative mb-5">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                autoComplete="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`${styles.auth_input} pl-5`}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Phone Number
              </span>
            </div>
            {phoneNumber.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-5 -mt-4 text-xs italic text-red-600`}
              >
                {' '}
                <FiAlertCircle /> Phone Number is required!
              </span>
            )}
            <div className="h-[50px] relative mb-5">
              <input
                type="text"
                name="Email"
                placeholder="Shop Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.auth_input} pl-5`}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Shop Email
              </span>
            </div>
            {email.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-5 -mt-4 text-xs italic text-red-600`}
              >
                {' '}
                <FiAlertCircle /> Email is required!
              </span>
            )}
            <div className="h-[50px] relative mb-5">
              <input
                type="text"
                name="Address"
                placeholder="Address"
                autoComplete="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`${styles.auth_input} pl-5`}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Address
              </span>
            </div>
            {address.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-5 -mt-4 text-xs italic text-red-600`}
              >
                {' '}
                <FiAlertCircle /> Address is required!
              </span>
            )}
            <div className="h-[50px] relative mb-5">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                autoComplete="zip-code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className={`${styles.auth_input} pl-5`}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Zip Code
              </span>
            </div>
            {zipCode.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-5 -mt-4 text-xs italic text-red-600`}
              >
                <FiAlertCircle /> Zip Code is required!
              </span>
            )}
            <div className="h-[50px] relative mb-2">
              <input
                type={hidPassword ? 'password' : 'text'}
                name="Password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${styles.auth_input} pl-5 pr-10 `}
              />
              <span className="absolute -top-[10px] left-3 bg-white px-1 text-xs text-[#00000098] peer-focus:text-[#007BFF]">
                Password
              </span>

              <span
                onClick={handleHidPassword}
                className="absolute top-1/2 -translate-y-1/2 right-3 text-[#535353]"
              >
                {hidPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </span>
            </div>
            {password.length < 1 && (
              <span
                className={`${styles.noramlFlex} gap-1 mb-2 -mt-1 text-xs italic text-red-600`}
              >
                {' '}
                <FiAlertCircle /> Password is required!
              </span>
            )}
            <div className={`${styles.noramlFlex} gap-2 text-[#535353] mt-4`}>
              <div className="h-[32px] w-[32px] ">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="user_avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  <FaUserCircle size={32} />
                )}
              </div>
              {!avatar ? (
                <label
                  className="border cursor-pointer text-sm p-1 px-2 rounded hover:border-[#007BFF]"
                  htmlFor="avatar"
                >
                  Upload Shop Logo
                </label>
              ) : (
                <div
                  className="border cursor-pointer text-sm p-1 px-2 rounded"
                  onClick={() => setAvatar(null)}
                >
                  Remove Avatar
                </div>
              )}
              <input
                type="file"
                name="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept=".jpg,.jpeg,.png"
                id="avatar"
                style={{ display: 'none' }}
              />
            </div>
            <button
              className={`${styles.auth_button} bg-[#007BFF] text-white font-semibold hover:bg-[#005dc0] my-6`}
            >
              Create Shop
            </button>
            <div className="flex gap-2 justify-center text-sm">
              <p>Already have an account?</p>
              <Link
                to={'/shop-login'}
                className="text-[#007BFF] font-semibold hover:underline"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ShopCreate;
