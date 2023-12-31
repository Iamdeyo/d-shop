import axios from 'axios';
import { server } from '../../../server';
// load user
const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: 'LoaduserRequest',
    });
    const { data } = await axios.get(`${server}/user/get-user`, {
      withCredentials: true,
    });
    dispatch({
      type: 'LoadUserSuccess',
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: 'LoadUserFail',
      payload: err.response.data.message,
    });
  }
};

export { loadUser };
