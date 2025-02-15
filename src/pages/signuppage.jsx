import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signuppage = () => {
  const[error,seterror]=useState("")
  const [formData, setFormData] = useState({
    username: "",
    confirmpassword: "",
    password: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmpassword) {
      axios
        .post("http://localhost:4000/api/user/register", formData)
        .then((resp) => {
          console.log(resp);
          location.href = "/login";
        })
        .catch((error) => console.error(error));
    } else{
    seterror("password is not match")
      
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col gap-6 max-w-md p-8 rounded-2xl bg-white shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold tracking-tighter text-yellow-500 flex items-center">
              Register
              <span className="ml-2 inline-block w-4 h-4 rounded-full bg-yellow-500 animate-pulse"></span>
            </p>
            <p className="text-sm text-gray-600">
              Signup now and get full access to our app.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
              />
            </label>

            <label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                name="email"
              />
            </label>

            <label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </label>

            <label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-all"
                type="password"
                placeholder="Confirm password"
                required
                onChange={(e) => {
                  setFormData({ ...formData, confirmpassword: e.target.value });
                }}
                name="confirmpassword"
              />
            </label>
          </div>
          {error && (
            <span className="text-red-500">{error}</span>
          )}
          

          

          <button
            className="w-full py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Submit
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-yellow-500 hover:underline">
              Login In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signuppage;
