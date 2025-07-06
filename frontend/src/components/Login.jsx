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
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        username,
        password,
      });
      if (res && res.data && res.data.token) {

        localStorage.setItem("token", res.data.token);
        navigate("/newentry");

      } else {
        throw new Error("Invalid response from server");
      }
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
  <div className="flex md:items-center justify-center min-h-screen">
  <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
    <h2 className="pt-32 sm:pt-32 md:pt-0 font-bold text-center mb-6 text-white text-2xl md:text-3xl ">Login</h2>
    {errorMessage && (
      <div className="mb-4 text-center text-sm text-red-600">{errorMessage}</div>
    )}
    <form onSubmit={handleSubmit}>
      <label className="text-white" htmlFor="username">Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
          <label className="text-white" htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="my-5 w-full bg-[#a243ce] hover:bg-[#742e95] text-white py-3 rounded-lg  transition-colors duration-200"
      >Login
      </button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-500">
      Don't have an account?{" "}
      <a href="/register" className="text-white hover:underline">Register
      </a>
    </p>
  </div>
</div>

  );
};

export default Login;