import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated === true) {
      navigate('/');
    }
  }, [isAuthenticated]);
  return (
    <>
      <Login />
    </>
  );
};
export default LoginPage;
