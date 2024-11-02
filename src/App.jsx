import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-deepSpace rounded-lg shadow-lg border border-neonBlue">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        {isSignUp ? (
          <SignUpForm onSuccess={handleSuccessToast} />
        ) : (
          <LoginForm onSuccess={handleSuccessToast} />
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-neonBlue underline transition duration-300 hover:text-white"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don’t have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
