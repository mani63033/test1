import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { Main_api } from "../apicalls/AllApiCalls";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const SubmitChange = async (e) => {
    e.preventDefault();
    try {
      console.log(login);
      const response = await axios.post(`${Main_api}/login`, login);
      console.log('Data submitted successfully:', response.data);
      const token = response.data.token; 
      localStorage.setItem('authToken', token);
      console.log('Token saved:', localStorage.getItem('authToken'));
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    setLogin({
      email: "",
      password: ""
    });
  
  };


  return (
    <>
      <form onSubmit={SubmitChange}>
        <div className="space-y-12" id="form" style={{marginLeft:"50px"}}>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2" style={{width:"250px"}}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={login.email}
                    onChange={change}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4" style={{width:"300px"}}>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={login.password}
                    onChange={change}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
      <div className="forgot">
        <Link to="/Signin">Sign in</Link>/<Link to="/">Forgot Password</Link>
      </div>
    </>
  );
}

export default Login;
