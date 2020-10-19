import { ActionsType, setErrors } from './../reducers/auth-reducer';
import getUserProfile from './getUserProfile';
import { authApi } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { StateType } from '../store/store';

const login = (
  clientId: number | null,
  email: string,
  password: string,
  setSubmitting: (isSubmitting: boolean) => void,
): ThunkAction<void, StateType, unknown, ActionsType> => dispatch => {
  authApi
    .login(clientId, email, password)
    .then(response => {
      const { accessToken } = response.data.data;
      dispatch(getUserProfile(accessToken));
      dispatch(setErrors(false, null));
    })
    .catch(err => {
      dispatch(setErrors(true, err.response.data.message));
      setSubmitting(false);
    });
};

export default login;
