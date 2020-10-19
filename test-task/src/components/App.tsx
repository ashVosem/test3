import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AuthFormContainer from './AuthForm/AuthFormContainer';
import ProfileContainer from './Profile/ProfileContainer';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path={'/login'} component={AuthFormContainer} />
      <Route path={'/profile'} component={ProfileContainer} />
    </BrowserRouter>
  );
};

export default App;
