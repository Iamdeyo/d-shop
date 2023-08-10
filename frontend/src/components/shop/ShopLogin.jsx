import styles from '../../styles/styles';
import MainLogo from '../MainLogo/MainLogo';
import { FiArrowLeft, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../../server';
import { toast } from 'react-toastify';

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidPassword, setHidpassword] = useState(true);

  const handleHidPassword = () => {
    setHidpassword(!hidPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${server}/shop/login-seller`,
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        setEmail('');
        setPassword('');
        // navigate('/');
        // window.location.reload()
        window.location.replace('/shop-home');
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
            Login as a seller
          </p>
          <p className="text-center text-sm opacity-75 -mt-4">
            Welcome back to D-Shop
          </p>

          <form onSubmit={handleSubmit}>
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

            <button
              className={`${styles.auth_button} bg-[#007BFF] text-white font-semibold hover:bg-[#005dc0] my-6`}
            >
              Log in Shop
            </button>
            <div className="flex gap-2 justify-center text-sm">
              <p>Don't have an account?</p>
              <Link
                to={'/shop-create'}
                className="text-[#007BFF] font-semibold hover:underline"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ShopLogin;
