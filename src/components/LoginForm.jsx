import { useState } from "react";
import PropTypes from "prop-types";
export default function LoginForm({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    onSuccess("Login successful!");

    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-1 bg-spacePurple border border-neonBlue rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-1 bg-spacePurple border border-neonBlue rounded"
          required
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-neonBlue text-deepSpace font-bold rounded transition duration-300 hover:bg-white"
      >
        Login
      </button>
    </form>
  );
}
LoginForm.propTypes = {
  onSuccess: PropTypes.func,
};
