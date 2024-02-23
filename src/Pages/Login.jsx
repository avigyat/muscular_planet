import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const host = "http://localhost:4000/";
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginDetails.email;

    const password = loginDetails.password;
    console.log(loginDetails);

    const response = await fetch(`${host}api/loginUser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.status) {
      //saving auth token in local storage and redirect
      localStorage.setItem("token", json.authToken);

      localStorage.setItem("email", email);

      navigate("/");
      alert("Welcome to muscular planet");
    } else {
      alert("invalid creds");
    }
  };
  return (
    <div>
      <div className="h-full  bg-gradient-to-b from-black via-gray-800 to to-gray-700 p-8">
        <form className="mx-8">
          <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Log In</h1>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  onChange={onChange}
                  value={loginDetails.email}
                  required
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={onChange}
                  value={loginDetails.password}
                  required
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full  text-center py-3 rounded btn-primary  focus:outline-none my-1"
                >
                  Log In
                </button>
              </div>

              <div className="text-white mt-6">
                Dont have have an account?
                <Link
                  className="no-underline border-b border-blue text-white"
                  to="/signUp"
                >
                  Sign Up
                </Link>
                .
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
