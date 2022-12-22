import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <p>
        Enter login information below. If you do not have an account, please
        click the register button below.
      </p>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
