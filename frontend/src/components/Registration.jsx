import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        username,
        password,
      });

      const token = res.data?.token;

      if (!token) {
        throw new Error("Token not received from server");
      }

      localStorage.setItem("token", token);
      setMessage("Registration successful!");
      navigate("/newentry");
    } catch (error) {
      console.error("Registration failed:", error);

      if (error.response?.data?.error) {
        setMessage(error.response.data.error);
      } else if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="font-bold text-center mb-6 text-white text-2xl md:text-3xl">Register</h2>

        {message && (
          <div className={`mb-4 text-center text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="text-white" htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            required
          />

          <label className="text-white" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-gray-800 text-white w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="my-5 w-full bg-[#a243ce] hover:bg-[#742e95] text-white py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
