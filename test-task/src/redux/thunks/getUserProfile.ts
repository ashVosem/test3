import { Dispatch } from 'react';
import { authApi } from '../../api/api';

import { ActionsType, setUserData } from '../reducers/auth-reducer';

const getUserProfile = (accessToken: string) => (dispatch: Dispatch<ActionsType>) => {
  authApi.getProfile(accessToken).then(response => {
    const { name, email } = response.data.data;
    dispatch(setUserData(accessToken, name, email, true));
  });
};

export default getUserProfile;
