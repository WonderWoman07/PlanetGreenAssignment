import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        toast.success('Successfully logged in!');
        navigate('/dashboard');
      } else {
        toast.error(result.error || 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-sm w-full">
        <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
          {/* Logo Header */}
          <div className="flex items-center text-white mb-6">
            <img
              src="/logo.png"
              alt="Demo Panel Logo"
              className="w-auto h-8"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Title and Subtitle */}
          <div className="mb-6 text-start">
            <h1 className="text-xl font-bold text-white mb-2">Log in to your account!</h1>
            <p className="text-gray-300 text-sm">Enter your email and password to login</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">


            {/* Email Input */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoPaperPlaneOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-2xl"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-gray-400 hover:text-white text-sm">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-gray-800 py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In to Account'}
            </button>
          </form>
          <hr className="border-gray-600 mt-5 opacity-50" />
          {/* Create Account Section */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm mb-3">Don't have account ?</p>
            <Link
              to="/register"
              className="inline-block w-full border border-white text-white py-3 px-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition duration-200"
            >
              Create New Account
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">2025 © Demo Panel | FE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 