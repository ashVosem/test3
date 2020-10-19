import React, { FC, useCallback } from 'react';

import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import { Redirect } from 'react-router-dom';

import * as Yup from 'yup';

import StyledFormik from './AuthFormStyles/StyledFormik';
import StyledHeader from './AuthFormStyles/StyledHeader';
import StyledErrorMessage from './AuthFormStyles/StyledErrorMessage';

type ValuesType = {
  clientId: number | null;
  email: string;
  password: string;
};
type PropsType = {
  accessToken: string | null;
  isAuth: boolean;
  isError: boolean;
  errorMessage: string | null;
  login: (
    clientId: number | null,
    email: string,
    password: string,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => void;
};

const AuthForm: FC<PropsType> = ({ isAuth, login, isError, errorMessage }) => {
  const initialValues: ValuesType = {
    email: '',
    password: '',
    clientId: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(4, 'Password is too short')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const onSubmit = useCallback(
    ({ clientId, email, password }: ValuesType, { setSubmitting }: FormikHelpers<ValuesType>) => {
      clientId = clientId ?? 1;
      setSubmitting(true);
      login(clientId, email, password, setSubmitting);
    },
    [login],
  );

  return isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <>
      <StyledFormik>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <StyledHeader>Login</StyledHeader>
              <Field component={TextField} name="email" type="email" label="Email" />
              <Field component={TextField} type="password" label="Password" name="password" />
              {isSubmitting && <LinearProgress />}
              {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </StyledFormik>
    </>
  );
};

export default AuthForm;
