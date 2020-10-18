import { ActionsType, setUserData } from './../reducers/auth-reducer';
import { authApi } from '../../api/api';
import { Dispatch } from 'react';

const logout = (accessToken: string | null) => (dispatch: Dispatch<ActionsType>) => {
  authApi
    .logout(accessToken)
    .then(response => {
      if (response.status === 200) {
        dispatch(setUserData(null, null, null, false));
      }
    })
    .catch(err => console.log(err.response));
};
export default logout;
