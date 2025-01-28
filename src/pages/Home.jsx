import { useState } from "react";
import "../Preloader.css";

export default function Home() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert(`Feedback submitted: ${feedback}`);
      setFeedback(""); // Clear input after submission
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h1 className="mb-5 text-gray-900 font-mono font-bold text-xl">Sign Up</h1>

        {/* Google Sign-In Button */}
        <button
          className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50"
          aria-label="Continue with Google"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
            width="24"
            height="24"
          />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>

        <span className="mb-2 text-gray-900">Or</span>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
            placeholder="Password"
            required
          />
          <input
            type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
            placeholder="Confirm password"
            required
          />
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-center mt-3 text-[14px]">
          Already have an account?{" "}
          <a href="/login" className="text-gray-600 hover:underline">
            Log In
          </a>
        </p>
        <p className="text-center mt-3 text-[14px]">
          By clicking continue, you agree to our{" "}
          <a href="/terms" className="text-gray-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-gray-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}