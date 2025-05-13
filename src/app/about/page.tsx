import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-lg text-center max-w-xl">
        This is the about page..
        
      </p>
      <a href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Go back Home</a>
    </div>
  );
} 