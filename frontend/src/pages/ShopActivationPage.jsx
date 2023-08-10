import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { server } from '../../server.js';

import axios from 'axios';

const ShopActivationPage = () => {
  const params = useSearchParams();
  const activation_token = params[0].get('activation_token');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/shop/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  return (
    <>
      <div className="text-center text-xl font-bold">
        {error ? (
          <p>Your token is expired</p>
        ) : (
          <p>Your has been created successfully</p>
        )}
      </div>
    </>
  );
};
export default ShopActivationPage;
