import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/userContext';

function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post('https://gyojqb3oge.execute-api.eu-west-2.amazonaws.com/login-dev/login', // replace with your  login  api endpoint
        
        {
        username,
        password,
      });

      if (response.data.body.statusCode === 200) {
        const userData = response.data.body.body.response;
        console.log(userData.token);
        
        setUser({
          name: userData.name,
          username: userData.username,
          token: userData.token,
          email:userData.email,
          age:userData.age,
          nationality:userData.nationality,
          maritalstatus:userData.maritalstatus,
          occupation:userData.occupation,
          
        });

        localStorage.setItem('user', JSON.stringify(userData.name));
        localStorage.setItem('email', JSON.stringify(userData.email));
        // setUser(userData.name) //
        localStorage.setItem('authToken', userData.token);
        navigate('/dashboard'); 
      }
    } catch (error) {
      setError('Error');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#00416A] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">Login to Your Account</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Username"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B964] focus:border-[#00B964]"
              placeholder="Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#00B964] text-white py-2 px-4 rounded-lg hover:bg-[#00A555] focus:ring-2 focus:ring-[#00B964] focus:ring-opacity-50 shadow-lg"
            disabled={loading} 
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-t-4 border-[#00B964] border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <p className="mt-6 text-center text-black">
          Don't have an account? <Link to="/signup" className="text-[#00B964] hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
