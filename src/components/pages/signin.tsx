import React from'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      Signin
      <Link to='/' >Home</Link>
      <Link to='/signup' >Signup</Link>
    </div>
  )
};

export default Signin;