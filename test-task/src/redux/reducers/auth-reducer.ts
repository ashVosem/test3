const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERRORS = 'SET_ERRORS';

export type StateType = {
  email: string | null;
  name: string | null;
  isAuth: boolean;
  errorMessage: string | null;
  isError: boolean;
  accessToken: string | null;
};
export type LoginDataType = {
  email: string | null;
  name: string | null;
  isAuth: boolean;
  accessToken: string | null;
};
export type ErrorsType = {
  errorMessage: string | null;
  isError: boolean;
};

const initialState: StateType & ErrorsType = {
  email: null,
  name: null,
  isAuth: false,
  accessToken: null,
  isError: false,
  errorMessage: null,
};

const authReducer = (state = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export type SetUserDataType = {
  type: typeof SET_USER_DATA;
  payload: LoginDataType;
};
export type SetErrorsType = {
  type: typeof SET_ERRORS;
  payload: ErrorsType;
};

export type ActionsType = SetUserDataType | SetErrorsType;

export const setUserData = (
  accessToken: string | null,
  name: string | null,
  email: string | null,
  isAuth: boolean,
): SetUserDataType => ({
  type: SET_USER_DATA,
  payload: { accessToken, name, email, isAuth },
});

export const setErrors = (isError: boolean, errorMessage: string | null): SetErrorsType => ({
  type: SET_ERRORS,
  payload: { isError, errorMessage },
});

export default authReducer;
