import login from '../../redux/thunks/login';
import AuthForm from './AuthForm';
import { connect } from 'react-redux';
import { authSelector } from '../../utils/selectors/authSelector';
import { StateType } from '../../redux/store/store';

const mapStateToProps = (state: StateType) => {
  return {
    accessToken: authSelector(state).accessToken,
    isAuth: authSelector(state).isAuth,
  };
};

export default connect(mapStateToProps, { login })(AuthForm);
