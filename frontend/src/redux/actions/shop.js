import axios from 'axios';
import { server } from '../../../server';
// load Shop
const loadShop = () => async (dispatch) => {
  try {
    dispatch({
      type: 'LoadShopRequest',
    });
    const { data } = await axios.get(`${server}/shop/get-seller`, {
      withCredentials: true,
    });
    dispatch({
      type: 'LoadShopSuccess',
      payload: data.shop,
    });
  } catch (err) {
    dispatch({
      type: 'LoadShopFail',
      payload: err.response.data.message,
    });
  }
};

export { loadShop };
