import React from "react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-md flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Create an account</h1>
        </div>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              placeholder="Enter your confirm password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5A0505] hover:bg-[#7a1a1a] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Create account
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#D1E9FF] hover:bg-blue-200 text-[#1570EF] font-semibold py-4 rounded-lg transition-colors border border-blue-200"
            style={{ borderRadius: 8, padding: 16 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_118_361)">
                <path d="M19.8052 10.2305C19.8052 9.55078 19.7491 8.86719 19.6295 8.19922H10.2V12.0492H15.601C15.3672 13.2992 14.6172 14.3672 13.5547 15.0801V17.3291H16.601C18.3672 15.7109 19.8052 13.2305 19.8052 10.2305Z" fill="#4285F4"/>
                <path d="M10.2 20C12.6992 20 14.8047 19.1797 16.601 17.3291L13.5547 15.0801C12.601 15.7109 11.4547 16.0801 10.2 16.0801C7.78906 16.0801 5.78906 14.4609 5.05469 12.3203H1.89844V14.6406C3.6875 17.9102 6.74219 20 10.2 20Z" fill="#34A853"/>
                <path d="M5.05469 12.3203C4.74219 11.5703 4.57031 10.75 4.57031 9.99999C4.57031 9.24999 4.74219 8.42968 5.05469 7.67968V5.35937H1.89844C1.17969 6.75 0.804688 8.32031 0.804688 9.99999C0.804688 11.6797 1.17969 13.25 1.89844 14.6406L5.05469 12.3203Z" fill="#FBBC04"/>
                <path d="M10.2 3.91992C11.5547 3.91992 12.8047 4.38086 13.8047 5.33008L16.6719 2.46094C14.8047 0.800781 12.6992 0 10.2 0C6.74219 0 3.6875 2.08984 1.89844 5.35937L5.05469 7.67968C5.78906 5.53906 7.78906 3.91992 10.2 3.91992Z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0_118_361">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button>
        </form>
        <div className="flex justify-center gap-2 text-sm">
          <span className="text-gray-500">Already have an account?</span>
          <a href="/login" className="text-blue-600 hover:underline font-medium">Log in</a>
        </div>
      </div>
    </div>
  );
} 