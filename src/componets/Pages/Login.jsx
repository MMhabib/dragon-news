import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import GoogleSIgn from "../../Shared/Lefsidenav/RightSideNav/GoogleSIgn";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [signinError,setSigninError]=useState('')
const location=useLocation()
const navigate=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setSigninError('')
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
navigate(location?.state ? location.state :'/');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setSigninError('No account found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          setSigninError('Incorrect password. Please try again.');
      }});
  };
  return (
    <div className="mt-10">
      <Navbar></Navbar>

      <div className="hero-content flex-col lg:flex-row-reverse my-10 p-16">
        <div className="bg-slate-50 w-[752px] h-[700px] drop-shadow-md  flex justify-center  items-center">
          <div className=" w-[606px] h-[548px] ">
            <div className="border-b-2">
              <h1 className="text-4xl text-center font-semibold mb-4">
                Login your account
              </h1>
            </div>
            <form onSubmit={handleLogin} className=" w-[559px] h-[339px] m-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-sm text-center">
              Don't have account?
              <Link className="text-red-700" to="/register">
                Register
              </Link>
            </p>
            <GoogleSIgn></GoogleSIgn>
          </div>
          <p>{signinError}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
