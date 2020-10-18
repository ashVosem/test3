export type GetProfileType = {
  data: {
    name: string;
    email: string;
  };
};

export type LogoutType = {
  success: boolean;
};

export type LoginDataType = {
  tokenType: string;
  expiresAt: string;
  accessToken: string;
  refreshToken: string;
};

export type LoginType = {
  data: LoginDataType;
};
