import React from 'react';

function SignUp() {
  const onSubmit = (e) => {
    e.preventDefault();
    // get the username and password from the form
    const username = e.target.username.value;
    const password = e.target.password.value;
    // create a new user object
    const user = {
      username,
      password,
    };
    // send the user object to the server
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    // return a form with a username and password input and a submit button, use the onSubmit function to handle the form submission , use bootstrap for styling
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
