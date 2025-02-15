import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [logindata, setlogindata] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (logindata) {
      axios
        .post("http://localhost:4000/api/user/login", logindata)
        .then((resp) => {
          console.log(resp);
          localStorage.setItem("token", resp.data.access_token);
          location.href = "/postblogs";
        });
    }
  };
  return (
    <div className="bg-gray-100" >
      <div
        className="h-screen flex items-center justify-center bg-gray-100"
        onSubmit={handleSubmit}
      >
        <form className="bg-white p-8 rounded-lg w-96">
          <p className="text-2xl font-bold text-center mb-8 text-yellow-500">
            Log in to your account
          </p>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setlogindata({ ...logindata, email: e.target.value });
              }}
              placeholder="Enter email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={(e) => {
                setlogindata({ ...logindata, password: e.target.value });
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Log In
          </button>
          <p className="mt-4 text-center text-gray-600">
            No account?
            <Link to="/signup" className="text-yellow-500 hover:underline ml-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
