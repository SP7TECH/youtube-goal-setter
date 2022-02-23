import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and continue setting up your goals</p>
      </section>

      <section className="form" onSubmit={onSubmit}>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" onChange={onChange} id="email" name="email" value={email} placeholder="Enter your Email Address" />
          </div>

          <div className="form-group">
            <input type="password" className="form-control" onChange={onChange} id="password" name="password" value={password} placeholder="Enter your Name" />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login;