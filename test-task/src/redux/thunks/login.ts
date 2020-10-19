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
): any => (dispatch: any) => {
  authApi
    .login(clientId, email, password)
    .then(response => {
      const { accessToken } = response.data.data;
      dispatch(getUserProfile(accessToken));
      dispatch(setErrors(false, null));
    })
    .catch(err => {
      debugger;

      dispatch(setErrors(true, err.response.data.message));
      setSubmitting(false);
    });
};

export default login;
