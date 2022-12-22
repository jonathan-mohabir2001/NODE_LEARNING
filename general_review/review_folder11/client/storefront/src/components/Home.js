import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import OrderPage from './OrderPage';
import SignUp from './SignUp';

function Home() {
  const navigate = useNavigate();
  return (
    // return a div with a button that when clicked, navigates to the login page and the order page
    <div className="">
      <h1>Home</h1>

      <h3>follow buttons below to navigate to your desired bage</h3>

      <h2>Login Page</h2>
      <button onClick={() => navigate('/login')}>Login</button>

      <h2>Sign Up Page</h2>
      <button onClick={() => navigate('/signup')}>Sign Up</button>

      <h2>Order Page</h2>
      <button onClick={() => navigate('/order')}>Order</button>
    </div>
  );
}

export default Home;
