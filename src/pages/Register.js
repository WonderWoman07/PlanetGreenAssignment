import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiUser, HiArrowRight } from "react-icons/hi";
import TandCModal from "../components/TandCModal";
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    setLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept the Terms & Conditions");
      setLoading(false);
      return;
    }

    try {
      const userData = {
        email: formData.email,
        emailVisibility: true,
        name: formData.fullName,
        username: formData.username,
        password: formData.password,
        passwordConfirm: formData.confirmPassword,
      };


      console.log("User sign up data : ", userData)

      const result = await register(userData);

      if (result.success) {
        toast.success('Registration successful! Welcome to the platform!');
        navigate("/dashboard");
      } else {
        toast.error(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.data?.message) {
        if (error.data?.password?.message) {
          toast.error(error.data?.password?.message);
        }
        else {
          toast.error(error.data.message);
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-2xl w-full">
        <div className="bg-gray-900 rounded-3xl shadow-xl p-8">
          {/* Header Row - Title/Subtitle Left, Logo Right */}
          <div className="flex justify-between items-start mb-8 text-start">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start mb-8"> */}
            <div>
              <h1 className="text-xl font-bold text-white mb-2">
                Create your account!
              </h1>
              <p className="text-gray-300 text-sm">
                Sign up to unlock exclusive features.
              </p>
            </div>
            <div className="flex items-center text-white">
              <img
                src="/logo.png"
                alt="Demo Panel Logo"
                className="w-auto h-8"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>

          {/* Horizontal Line 1 */}
          <hr className="border-gray-600 mb-8" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Row 1: Avatar Left, Full Name Right */}
            <div className="flex items-center space-x-4 text-start">
              <div className="w-20 h-20 bg-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 relative group cursor-pointer hover:bg-gray-500 transition-colors">
                <HiUser className="w-10 h-10 text-gray-400" />
              </div>
              <div className="flex-1">
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Row 2: Username Left, Email Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your full email"
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Row 3: Password Left, Confirm Password Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Row 4: Terms Left, Create Account Button Right */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-2xl"
                />
                <span className="text-sm">I accept the</span>
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-sm underline ml-1 hover:text-blue-400"
                >
                  Terms & Conditions
                </button>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="bg-white text-gray-800 py-3 px-20 rounded-xl font-semibold hover:bg-gray-100 transition duration-200 disabled:opacity-50 flex items-center "
              >
                {loading ? "Creating Account..." : "Create Account"}
                <HiArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Horizontal Line 2 */}
            <hr className="border-gray-600" />

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
              <div className="text-white text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline hover:text-blue-400">
                  Log in
                </Link>
              </div>
              <div className="text-gray-400 text-xs">
                2025 © Demo Panel | FE
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && <TandCModal setShowTerms={setShowTerms} />}
    </div>
  );
};

export default Register;
