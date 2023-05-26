import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Result } from "postcss";

const Register = () => {




    const{ createUser}=useContext(AuthContext);
    const [error,setError]=useState('')
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl=form.photoUrl.value;

    createUser(email,password)
    .then(result=>{
        const createUser=result.user;
    })
    .catch(error=>{
        console.log(error);
        return setError(error)
    })
    console.log(name,photoUrl, email, password);
  };
  return (
    <div className="body">
      <form onSubmit={handleRegister} className="box">
        <span className="borderLine"></span>
        <div className="form">
          <h2>Register</h2>
          <div className="inputBox">
            <input type="text" name="name" required />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" name="photoUrl" required />
            <span>Photo Url</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="email" name="email" required />
            <span>Email</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" name="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <span>{error}</span>
            <Link to="/login">Already Have a Accoutn? Login</Link>
          </div>
          <input type="submit" value="Register" />
          
        </div>
      </form>
    </div>
  );
};

export default Register;
