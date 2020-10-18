import getUserProfile from './getUserProfile';
import { authApi } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { StateType } from '../store/store';

const login = (
  clientId: number | null,
  email: string,
  password: string,
): ThunkAction<void, StateType, unknown, Action> => dispatch => {
  authApi
    .login(clientId, email, password)
    .then(response => {
      if (response.status === 200) {
        const { accessToken } = response.data.data;
        dispatch(getUserProfile(accessToken));
      }
    })
    .catch(err => console.log(err.response));
};
export default login;
