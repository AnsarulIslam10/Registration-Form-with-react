import { useState } from "react";
import PropTypes from "prop-types";
export default function SignUpForm({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onSuccess("Sign Up successful!");

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mt-1 bg-spacePurple border border-neonBlue rounded"
          required
        />
      </div>
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
      </div>
      <div>
        <label className="block text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mt-1 bg-spacePurple border border-neonBlue rounded"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-neonBlue text-deepSpace font-bold rounded transition duration-300 hover:bg-white"
      >
        Sign Up
      </button>
    </form>
  );
}

SignUpForm.propTypes = {
  onSuccess: PropTypes.func,
};
