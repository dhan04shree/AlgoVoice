import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        username,
        password,
      });

       console.log("Registration response:", res);

    const token = res.data.token;

    if (!token) {
      throw new Error("Token not received from server");
    }
    localStorage.setItem("token", token);
    navigate("/newentry");
   
      setMessage(res.data.message);
    } catch (error) {
      console.error("Registration failed:", error.res.data.error);
      setMessage(error.res.data.error);
    }
  };

  return (
    <div className=" flex md:items-center justify-center min-h-screen">
  <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
    <h2 className="pt-32 sm:pt-32 md:pt-0 font-bold text-center mb-6 text-white text-2xl md:text-3xl">Register</h2>
    <form onSubmit={handleSubmit}>
      <label className="text-white" htmlFor="username">Username</label>
      <input
      id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      <label className="text-white" htmlFor="password">Password</label>
      <input
      id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      <button
        type="submit"
        className="my-5 w-full bg-[#a243ce] hover:bg-[#742e95] text-white py-3 rounded-lg  transition-colors duration-200"
      >
        Register
      </button>
    </form>
    
    <p className="mt-4 text-center text-sm text-gray-500">
      Already have an account? {" "}
      <a href="/login" className="text-white hover:underline">
        Login
      </a>
    </p>
    {message && (
      <p className="mt-4 text-center text-sm text-green-600">{message}</p>
    )}
  </div>
</div>

  );
};

export default Registration;