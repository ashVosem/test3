import axios from 'axios';

import { GetProfileType, LoginType, LogoutType } from './ApiTypes';

const instance = axios.create({
  baseURL: 'https://tager.dev.ozitag.com/api',
  responseType: 'json',
});

export const authApi = {
  getProfile(accessToken: string) {
    return instance.get<GetProfileType>('/tager/user/profile', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  login(clientId: number | null, email: string, password: string) {
    return instance.post<LoginType>(`/auth/user`, {
      clientId,
      email,
      password,
    });
  },
  logout(accessToken: string | null) {
    return instance.post<LogoutType>(
      '/tager/user/profile/logout',
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
  },
};
