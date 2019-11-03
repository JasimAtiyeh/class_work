import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: fromUser => dispatch(createNewUser(fromUser)),
});

export default connect(null, mapDispatchToProps)(Signup);