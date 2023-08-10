import { useNavigate } from 'react-router-dom';
import Signup from '../components/Signup/Signup.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SignupPage = () => {
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
      <Signup />
    </>
  );
};
export default SignupPage;
