import React, { FC } from 'react';

import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import { Redirect } from 'react-router-dom';

import * as Yup from 'yup';

import StyledFormik from './AuthFormStyles/StyledFormik';
import StyledHeader from './AuthFormStyles/StyledHeader';

type ValuesType = {
  clientId: number | null;
  email: string;
  password: string;
};
type PropsType = {
  accessToken: string | null;
  isAuth: boolean;
  login: (clientId: number | null, email: string, password: string) => void;
};

const AuthForm: FC<PropsType> = ({ isAuth, login }) => {
  const initialValues: ValuesType = {
    email: '',
    password: '',
    clientId: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = ({ clientId, email, password }: ValuesType) => {
    if (!clientId) clientId = 1;
    login(clientId, email, password);
  };

  return isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <>
      <StyledFormik>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ submitForm, isSubmitting }) => (
            <Form>
              <StyledHeader>Login</StyledHeader>
              <Field component={TextField} name="email" type="email" label="Email" />
              <br />
              <Field component={TextField} type="password" label="Password" name="password" />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
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
