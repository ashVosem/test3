const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType = {
  email: string | null;
  name: string | null;
  isAuth: boolean;
  isLoading?: boolean;
  isError?: boolean;
  accessToken: string | null;
};

const initialState: initialStateType = {
  email: null,
  name: null,
  isAuth: false,
  isLoading: false,
  isError: false,
  accessToken: null,
};

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export type SetUserDataType = {
  type: typeof SET_USER_DATA;
  data: initialStateType;
};

export type ActionsType = SetUserDataType;

export const setUserData = (
  accessToken: string | null,
  name: string | null,
  email: string | null,
  isAuth: boolean,
): SetUserDataType => ({
  type: SET_USER_DATA,
  data: { accessToken, name, email, isAuth },
});

export default authReducer;
