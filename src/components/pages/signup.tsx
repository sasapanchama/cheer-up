import React, { useCallback } from'react';
import { Link } from 'react-router-dom';
import firebaseApp from '../../config/firebase';

const Signup = () => {
  // const handleSignup = useCallback(async eve => {
  //   eve.preventDefault();
  //   const { email, password } = eve.target.elements;
  //   try {
  //     await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
  //     history.push('/');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [history]);

  return (
    <div>
      Signup
      <Link to='/' >Home</Link>
      <Link to='/signin' >Signin</Link>
    </div>
  )
};

export default Signup;