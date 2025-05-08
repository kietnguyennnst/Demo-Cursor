import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-[30px] shadow-lg p-12 w-[540px] flex flex-col items-center">
        <h1 className="font-poppins font-semibold text-[28px] text-[#101828] mb-8 w-full text-left">Login to your account</h1>
        <form className="flex flex-col gap-8 w-full">
          {/* Email Field */}
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-poppins text-[16px] text-[#344054]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="kietnguyen@gmail.com"
              className="rounded-lg border-2 border-[#D1E9FF] px-4 py-3 font-poppins text-[14px] text-[#344054] focus:outline-none focus:border-[#1570EF]"
            />
          </div>
          {/* Password Field */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="font-poppins text-[16px] text-[#344054]">Password</label>
              <a href="#" className="font-poppins text-[16px] text-[#1570EF]">Forgot?</a>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="rounded-lg border border-[#D0D5DD] px-4 py-3 font-poppins text-[14px] text-[#98A2B3] w-full focus:outline-none focus:border-[#1570EF]"
              />
              {/* Eye icon placeholder */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#98A2B3]">
                {/* You can replace this with an actual SVG icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </span>
            </div>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#1570EF] text-white font-poppins font-semibold text-[16px] rounded-lg py-4 mt-2 hover:bg-[#175cd3] transition"
          >
            Login now
          </button>
        </form>
        {/* Sign up prompt */}
        <div className="flex items-center gap-2 mt-8">
          <span className="font-poppins text-[16px] text-[#98A2B3]">Don't have an account?</span>
          <a href="#" className="font-poppins text-[16px] text-[#1570EF] font-medium">Sign up</a>
        </div>
      </div>
    </div>
  );
} 