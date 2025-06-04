import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        username,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-md bg-[#1b2a41] p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6 text-white">Register</h2>
    <form onSubmit={handleSubmit}>
      <label className="text-white" htmlFor="username">Username</label>
      <input
      id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        className=" bg-[#ccc9dc] w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      <label className="text-white" htmlFor="password">Password</label>
      <input
      id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="bg-[#ccc9dc] w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg  hover:bg-[#0c0c0c]  transition-colors duration-200"
      >
        Register
      </button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">
      Already have an account? {" "}
      <a href="/login" className="text-[#ccc9dc] hover:underline">
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