import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [form, _setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* WHITE CENTER BOX */}
      <div className="bg-white shadow-8xl rounded-2xl flex w-[90%] max-w-4xl overflow-hidden h-112.5">
        
        {/* LEFT IMAGE */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/red-landscape.jpg"
            alt="Side"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Log in
          </h2>

          <input
            name="email"
            value={form.email}
            className="w-full px-4 py-3 mb-4 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="Email"
            type="email"
          />

          <input
            name="password"
            value={form.password}
            className="w-full px-4 py-3 mb-4 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="Password"
            type="password"
          />

          <button className="w-full py-3 bg-red-800 text-white rounded-3xl font-medium hover:bg-red-600 transition">
            Log in
          </button>

         
          {/* SOCIAL LOGIN UNDER BUTTON */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition">
          <FcGoogle className="text-3xl" />
          </button>

          <button className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 transition">
          <FaGithub className="text-3xl" />
          </button>
        </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup"  className="text-pink-800 font-medium hover:underline">
              Sign up
            </Link>
          </p>
          <Link to="/signup" className="text-pink-800 font-medium hover:underline text-sm mt-6 block text-center">
        Forgot password? 
        </Link>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
