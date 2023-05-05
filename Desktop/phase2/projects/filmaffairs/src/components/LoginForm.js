import React from "react";

function LoginForm() {
  return (
    <div className="login-form">
      <h3>Login/Signup</h3>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        {/* <p>Don't have an account? <a href="#">Sign up</a></p> */}
      </form>
    </div>
  );
}

export default LoginForm;