import Profile from './Profile';
import logout from '../../redux/thunks/logout';
import { connect } from 'react-redux';
import { authSelector } from '../../utils/selectors/authSelector';

import { StateType } from '../../redux/store/store';

const mapStateToProps = (state: StateType) => {
  return {
    accessToken: authSelector(state).accessToken,
    name: authSelector(state).name,
    email: authSelector(state).email,
    isAuth: authSelector(state).isAuth,
  };
};

export default connect(mapStateToProps, {
  logout,
})(Profile);
