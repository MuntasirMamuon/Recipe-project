import React, { useContext } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { handlerGithubSignIn, handlerGoogleSignIn, signIn } =
    useContext(AuthContext);
    const Navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname ||'/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () =>{
    handlerGoogleSignIn()
    .then(result => {
        const loggedUser = result.user;
        Navigate(from ,{replace: true})
       
        
    })
    .catch(error => console.log(error))
}
const handleGithubSignInBtn = () =>{
  handlerGithubSignIn()
    .then(result => {
        const loggedUser = result.user;
        Navigate(from ,{replace: true})
        
    })
    .catch(error => console.log(error))

}
  return (
    <div>
      <div className="body">
        <div className="box">
          <form onSubmit={handleLogin} className="form">
            <h2>Sign in</h2>
            <div className="inputBox">
              <input type="email" name="email" required />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              

              <Link to="/register">Create a new Account</Link>
            </div>
            <input className="" type="submit" value="login" />
            <div className=" text-white flex mt-10  mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="border primary-color p-2 flex items-center "
              >
                <FcGoogle />{" "}
                <Link className="text-white">Signin with Google</Link>
              </button>
              <button
                onClick={handleGithubSignInBtn}
                className="ml-4 border primary-color p-2 flex items-center"
              >
                <BsGithub /> <Link>Signin with Git Hub</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
