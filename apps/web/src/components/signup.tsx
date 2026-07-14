import { useState } from "react";
import Lottie from "lottie-react";
import spaceAnim from "../assets/space.json";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl flex w-[90%] max-w-4xl overflow-hidden h-[450px]">
        
        {/* Animation */}
        <div className="w-1/2 hidden md:flex items-center justify-center border-6 border-red-800 rounded-xl">
          <Lottie
            animationData={spaceAnim}
            loop
            className="w-full h-full"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Sign up
          </h1>

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
          />

          {/* OAuth */}
          <div className="flex justify-center gap-8 mt-2 mb-6">
            <button className="flex flex-col items-center gap-2 transition hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100">
                <FcGoogle className="text-2xl" />
              </div>
              <span className="text-sm text-gray-600">
                Google
              </span>
            </button>

            <button className="flex flex-col items-center gap-2 transition hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100">
                <FaGithub className="text-2xl text-black" />
              </div>
              <span className="text-sm text-gray-600">
                GitHub
              </span>
            </button>
          </div>

          <button
            onClick={handleRegister}
            className="w-full py-3 bg-red-800 text-white rounded-3xl font-medium hover:bg-red-600 transition"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;