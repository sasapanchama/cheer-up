import React, { FC, useEffect } from'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import firebaseApp from '../../config/firebase';
import { RootState } from '../../store/types';
// import ButtonSignout from '../../containers/atoms/ButtonSignout';
import { addCurrentUser, removeCurrentUser } from '../../store/actions/currentUser';

const mapState = (state: RootState) => ({
  user: state.currentUser.user
});

const mapDispatch = {
  addCurrentUser,
  removeCurrentUser
};

const connector = connect(
  mapState,
  mapDispatch
);

type Props = {} & ConnectedProps<typeof connector> & RouteComponentProps;

const Home: FC<Props> = (props) => {

  console.log(props);
  
  useEffect(() => {
    firebaseApp?.auth().onAuthStateChanged(() => console.log('aaa'));
  }, []);

  return (
    <div>
      Home
      <Link to='/signup' >Signup</Link>
      <Link to='/signin' >Signin</Link>
      <div>
        {/* <ButtonSignout /> */}
      </div>
    </div>
  )
};

export default connector(withRouter(Home));
