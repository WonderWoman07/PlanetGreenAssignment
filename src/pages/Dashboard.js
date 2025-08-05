import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { BsHouseAdd } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircle, LuLogOut } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiCalendarBlankBold, PiBuildingOfficeBold } from "react-icons/pi";
import { SiHackthebox } from "react-icons/si";
import { ImStack } from "react-icons/im";
import { TbTruckDelivery, TbChartBar } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { MdChecklist, MdNotifications } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let user = localStorage.getItem('user');
  let parsedUser = JSON.parse(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Overlay with Blur */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar - Overlay on mobile, normal on desktop */}
      <div className={`fixed md:relative z-50 w-64 md:w-16 lg:w-20 bg-gray-800 flex flex-col items-center py-4 h-full transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo */}
       
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
              <img src="./PlanetGreenLogo.png" alt="logo" className="w-20 h-20" />
          </div>

        {/* Navigation Icons */}
        <div className="flex flex-col items-center space-y-6 flex-1">
          {/* Dashboard - Active */}
          <div className="w-9 h-9 bg-gray-600 rounded-lg flex items-center justify-center">
            <FiHome className="text-white text-lg" />
          </div>

          {/* Calendar */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <PiCalendarBlankBold className="text-lg" />
          </div>

          {/* Boxes */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <SiHackthebox className="text-lg" />
          </div>

          {/* Document */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <ImStack className="text-lg" />
          </div>

          {/* List */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <PiBuildingOfficeBold className="text-lg" />
          </div>

          {/* Chat */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <TbTruckDelivery className="text-lg" />
          </div>

          {/* Chart */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <TbChartBar className="text-lg" />
          </div>

          {/* User */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <FiUser className="text-lg" />
          </div>

          {/* Settings */}
          <div className="w-10 h-10 text-white flex items-center justify-center">
            <IoSettingsOutline className="text-lg" />
          </div>
        </div>

        {/* Logout - Fixed to bottom */}
        <div className="absolute bottom-4">
          <button
            onClick={handleLogout}
            className="w-10 h-10 text-white flex items-center justify-center"
          >
            <LuLogOut className="text-lg" />
          </button>
        </div>
      </div>

      {/* Main Content - Full width on mobile when sidebar is closed */}
      <div className={`flex-1 flex flex-col overflow-hidden ${isSidebarOpen ? 'md:flex-1' : 'flex-1'}`}>
        {/* Header */}
        <header className="bg-gray-100 shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden w-10 h-10 border rounded-lg flex items-center justify-center bg-white"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <FiX className="text-gray-600" />
              ) : (
                <FiMenu className="text-gray-600" />
              )}
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search Events...."
                  className="w-full pl-10 pr-1 py-2 border border-gray-300 rounded-xl bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile: Hide buttons, show only icons */}
              <div className="hidden sm:flex items-center space-x-4">
                <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center bg-white text-sm">
                  <span className="hidden sm:inline">New Client</span>
                  <span className="ml-1">
                    <BsHouseAdd />
                  </span>
                </button>

                <button className="px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center text-sm">
                  <span className="hidden sm:inline">New Work Order</span>
                  <span className="ml-2">
                    <FiBox />
                  </span>
                </button>
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button className="w-8 h-8 sm:w-10 sm:h-10 border rounded-lg flex items-center justify-center hover:bg-gray-200 bg-white">
                  <IoSettingsOutline className="text-sm sm:text-base" />
                </button>

                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center hover:bg-gray-200 border bg-white">
                  <LuMessageCircle className="text-sm sm:text-base" />
                </button>

                <button className="w-8 h-8 sm:w-10 sm:h-10 border rounded-lg flex items-center justify-center hover:bg-gray-200 bg-white">
                  <IoMdNotificationsOutline className="text-sm sm:text-base" />
                </button>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <img
                    src="./profile.png"
                    alt="profile image"
                    className="rounded-lg w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-lg text-gray-600 mb-4">
            <FaSitemap />
            <span className="ml-2  text-gray-500 font-medium">Dashboard</span>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-start">
            Platform Dashboard
          </h1>

          {/* Welcome Message */}
          <div className="mb-6 sm:mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm sm:text-base">
              Welcome back,{" "}
              <span className="font-semibold">{parsedUser?.name || parsedUser?.email || "User"}</span>!
              You're successfully logged in to the Demo Panel.
            </p>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Large Card - Top Left */}
            <div className="md:col-span-2 bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Overview
                </h3>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <TbChartBar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-48 sm:h-64 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base text-center px-4">
                  Chart content will be displayed here
                </p>
              </div>
            </div>

            {/* Small Card - Top Right */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Quick Stats
                </h3>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <TbChartBar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-48 sm:h-64 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base text-center px-4">
                  Statistics will be displayed here
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Recent Activity
                </h3>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <BiTime className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base text-center px-4">
                  Activity feed will be displayed here
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Tasks</h3>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <MdChecklist className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base text-center px-4">
                  Task list will be displayed here
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Notifications
                </h3>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <MdNotifications className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-40 sm:h-48 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-500 text-sm sm:text-base text-center px-4">
                  Notifications will be displayed here
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
