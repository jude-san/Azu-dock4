import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
    age: '',
    maritalstatus: '',
    occupation: '',
    nationality: '',
  });


  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://gyojqb3oge.execute-api.eu-west-2.amazonaws.com/login-dev/register', formData); // replace with your  signup  api endpoint
      console.log(formData);

      console.log("QWERTYUI");

      console.log(response.data.body);

      if (response.status === 200) {
        alert(response.data.body.message || 'User registered successfully');
        navigate('/login');
      } else {
        setError(response.data.body.message || 'Something went wrong!');
      }
    } catch (err) {
      setError(err.response?.data?.body?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#00416A] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">Create Your Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="relative">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Age"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Occupation"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Nationality"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="maritalstatus"
              value={formData.maritalstatus}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Marital Status"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Username"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00B964] text-white py-2 px-4 rounded-lg hover:bg-[#00A555] focus:ring-2 focus:ring-[#00B964] focus:ring-opacity-50 shadow-lg"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-t-4 border-[#00B964] border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <p className="mt-6 text-center text-black">
          Already have an account? <Link to="/login" className="text-[#00B964] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
