import { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* WHITE CENTER BOX */}
      <div className="bg-white shadow-5xl rounded-2xl flex w-[90%] max-w-4xl overflow-hidden h-[450px]">
        
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
          <div className="flex flex-row justify-center gap-4 mt-6">
            <button className="w-1/2 bg-gray-200 py-2 rounded-md">
              Login with Google
            </button>

            <button className="w-1/2 bg-gray-200 py-2 rounded-md">
              Login with GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <span className="text-pink-800 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
