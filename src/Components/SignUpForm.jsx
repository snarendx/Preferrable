import React from "react";

const SignUpForm = ({ formData, handleInputChange, handleSignUp, errors }) => {
  return (
    <div className="bg-gray-300 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-center text-lg font-semibold mb-6">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSignUp}>
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">Name</label>
          <div className="w-2/3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.name ? 'border border-red-500' : ''
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">Mobile Number</label>
          <div className="w-2/3">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.mobileNumber ? 'border border-red-500' : ''
              }`}
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
          </div>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">Email</label>
          <div className="w-2/3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.email ? 'border border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">Password</label>
          <div className="w-2/3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.password ? 'border border-red-500' : ''
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">Confirm Password</label>
          <div className="w-2/3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.confirmPassword ? 'border border-red-500' : ''
              }`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-1/3">OTP</label>
          <div className="w-2/3">
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={formData.otp}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3626A7] ${
                errors.otp ? 'border border-red-500' : ''
              }`}
            />
            {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
          </div>
        </div>

        <button type="submit" className="w-full bg-[#3626A7] text-white py-2 rounded-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
