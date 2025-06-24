import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <div className="w-full flex justify-center">
          <Image src="/cursor-ai.png" alt="Cursor AI Logo" width={80} height={80} className="mb-2" />
        </div>
        
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-6">About Cursor AI Demo</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Welcome to our Cursor AI demonstration project! This application showcases the power and 
              capabilities of AI-assisted development using Cursor IDE.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">🚀 Features</h3>
                <ul className="space-y-2">
                  <li>• AI-powered code generation</li>
                  <li>• Smart auto-completion</li>
                  <li>• Intelligent refactoring</li>
                  <li>• Real-time code suggestions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-600">💡 Purpose</h3>
                <ul className="space-y-2">
                  <li>• Demonstrate AI capabilities</li>
                  <li>• Showcase modern development</li>
                  <li>• Improve coding productivity</li>
                  <li>• Explore innovative workflows</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">🛠️ Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-medium">Next.js 15</div>
                  <div className="text-sm text-gray-600">React Framework</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">TypeScript</div>
                  <div className="text-sm text-gray-600">Type Safety</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Tailwind CSS</div>
                  <div className="text-sm text-gray-600">Styling</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Cursor AI</div>
                  <div className="text-sm text-gray-600">AI Assistant</div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 italic">
              "Empowering developers with AI-assisted coding for faster, smarter development workflows."
            </p>
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="/"
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </a>
        <a
          href="https://cursor.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Learn More About Cursor
        </a>
      </footer>
    </div>
  );
} 