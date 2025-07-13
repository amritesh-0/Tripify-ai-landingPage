import React from 'react';
import { Download, Smartphone, Apple } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Travel Smarter?
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of adventure travelers who never get lost, even in the most remote destinations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a href="https://github.com/amritesh-0/Tripify-ai.git" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center shadow-lg">
            <Download className="w-5 h-5 mr-3" />
            Download APK
            <span className="ml-2 text-sm text-gray-500">(Android)</span>
          </a>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center">
            <Apple className="w-5 h-5 mr-3" />
            iOS Coming Soon
          </button>
        </div>
        
        <div className="text-sm text-blue-200">
          <p className="mb-2">🤖 Supports Android 8.0+</p>
          <p>📱 iOS version launching Q2 2025</p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;