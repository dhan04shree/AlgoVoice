import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); 
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        username,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); 
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
  <div className="bg-gray-900 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-md bg-[#1b2a41]  p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
    {errorMessage && (
      <div className="mb-4 text-center text-sm text-red-600">{errorMessage}</div>
    )}
    <form onSubmit={handleSubmit}>
      <label className="text-white" htmlFor="username">Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="bg-[#ccc9dc] w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
          <label className="text-white" htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className=" bg-[#ccc9dc] w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-[#0c0c0c] transition-colors duration-200"
      >Login
      </button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">
      Don't have an account?{" "}
      <a href="/register" className="text-[#ccc9dc] hover:underline">Register
      </a>
    </p>
  </div>
</div>

  );
};

export default Login;