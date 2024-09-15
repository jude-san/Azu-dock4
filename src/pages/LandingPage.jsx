import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#00416A] px-4 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to AI MAVERICKS </h1>
        <h2 className="text-3xl font-bold text-[#00B964] mb-8">Elevate Your Career</h2>
        <p className="text-lg mb-12 max-w-xl mx-auto">
          Embrace your future success by mastering the technological skills that propel your journey.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="bg-white text-[#00416A] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#00B964] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#00A555] transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
