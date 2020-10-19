import React, { FC, useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Avatar } from '@material-ui/core';

import useStyles from './ProfileStyles/MateriaUiStyles/useStyles';

import StyledProfile from './ProfileStyles/StyledComponents/StyledProfile';
import StyledProfileContent from './ProfileStyles/StyledComponents/StyledProfileContent';
import StyledField from './ProfileStyles/StyledComponents/StyledField';

type PropsType = {
  accessToken: string | null;
  name: string | null;
  email: string | null;
  isAuth: boolean;
  logout: (accessToken: string | null) => void;
};

const Profile: FC<PropsType> = ({ name, email, isAuth, accessToken, logout }) => {
  const classes = useStyles();

  const onClick = useCallback(
    (accessToken: string | null) => {
      logout(accessToken);
    },
    [logout],
  );

  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <StyledProfile>
      <div className={classes.root}>
        <Avatar
          className={classes.avatar}
          alt="Avatar"
          src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        />
        <StyledProfileContent>
          <StyledField>{name}</StyledField>
          <StyledField>{email}</StyledField>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => onClick(accessToken)}>
            logout
          </Button>
        </StyledProfileContent>
      </div>
    </StyledProfile>
  );
};

export default Profile;
