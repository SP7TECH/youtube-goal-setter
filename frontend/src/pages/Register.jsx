import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {name, email, password, confirmPassword} = formData;

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
          <FaUser /> Register
        </h1>
        <p>Create an Account</p>
      </section>

      <section className="form" onSubmit={onSubmit}>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" onChange={onChange} id="name" name="name" value={name} placeholder="Enter your Name" />
          </div>

          <div className="form-group">
            <input type="email" className="form-control" onChange={onChange} id="email" name="email" value={email} placeholder="Enter your Email Address" />
          </div>

          <div className="form-group">
            <input type="password" className="form-control" onChange={onChange} id="password" name="password" value={password} placeholder="Enter your Name" />
          </div>

          <div className="form-group">
            <input type="password" className="form-control" onChange={onChange} id="confirmPassword" name="confirmPassword" value={confirmPassword} placeholder="Enter your Name" />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register