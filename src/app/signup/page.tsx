"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6fb]">
      <div className="bg-white rounded-[20px] px-[72px] py-12 w-[540px] shadow-lg">
        <h2 className="font-poppins font-semibold text-[28px] text-[#101828] mb-8">Create an account</h2>
        <form className="flex flex-col gap-6">
          {/* Email */}
          <div>
            <label className="font-poppins font-normal text-[16px] text-[#344054]">Email</label>
            <input
              type="email"
              placeholder="binh.duong@gmail.com"
              className="w-full border-[3px] border-[#D1E9FF] rounded-[8px] py-3 px-4 mt-2 text-[14px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#5593EA]"
            />
          </div>
          {/* Password */}
          <div>
            <label className="font-poppins font-normal text-[16px] text-[#344054]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-[#D0D5DD] rounded-[8px] py-3 px-4 mt-2 text-[14px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#5593EA]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
                tabIndex={-1}
              >
                <span role="img" aria-label="Show password">👁️</span>
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <label className="font-poppins font-normal text-[16px] text-[#344054]">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Enter your confirm password"
                className="w-full border border-[#D0D5DD] rounded-[8px] py-3 px-4 mt-2 text-[14px] font-poppins focus:outline-none focus:ring-2 focus:ring-[#5593EA]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
                tabIndex={-1}
              >
                <span role="img" aria-label="Show password">👁️</span>
              </button>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-[#5593EA] text-[#FCFCFD] font-poppins font-semibold text-[16px] border-none rounded-[8px] py-4 w-full mb-1 cursor-pointer hover:bg-[#4077c6] transition-colors"
            >
              Create account
            </button>
            <button
              type="button"
              className="bg-[#D1E9FF] text-[#1570EF] font-poppins font-semibold text-[16px] border-none rounded-[8px] py-4 w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-[#b3d4fa] transition-colors"
            >
              <span role="img" aria-label="Google">🔵</span> Continue with Google
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="text-[#98A2B3] text-[16px] font-poppins">Already have an account ?</span>
          <Link href="/login" className="text-[#1570EF] font-poppins font-medium text-[16px] hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
} 