import Lottie from "lottie-react"
import spaceAnim from "../assets/space.json"


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-8xl rounded-2xl flex w-[90%] max-w-4xl overflow-hidden h-112.5">
        
        {/* Image section */}
            
              <div className="w-1/2 hidden md:flex items-center justify-center h-112.5 border-6 border-red-800 rounded-xl">
        <Lottie
          animationData={spaceAnim}
          loop
          className="w-full h-full"
        />
      </div>

       

        {/* Form section */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10">
    <h1 className="text-4xl font-bold mb-6 text-center">Sign up</h1>

    <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border focus:ring-2 rounded-lg focus:ring-black"
        />

    <input
        type="text"
        placeholder="Email"
        className="w-full mb-4 px-4 py-3 border focus:ring-2 rounded-lg focus:ring-black"
    />

    <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-3 border focus:ring-2 rounded-lg focus:ring-black"
    />
        <button className="w-full py-3 bg-red-800 text-white rounded-3xl font-medium hover:bg-red-600 transition">
            Sign up
          </button>
    </div>


      </div>
    </div>
  )
}

export default Signup

