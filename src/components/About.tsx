import React from 'react';
import { Brain, Wifi, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What is Tripify AI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Works Offline</h3>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote Adventures</h3>
            </div>
          </div>
          
          <div className="text-left space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Tripify AI is your intelligent travel companion designed specifically for adventure travelers 
              exploring remote regions like Leh-Ladakh. Unlike traditional travel apps that rely on constant 
              internet connectivity, Tripify AI brings the power of artificial intelligence directly to your device.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Once you download a destination-specific data package, you'll have access to a sophisticated 
              AI assistant that understands local culture, weather patterns, attractions, and travel logistics. 
              Whether you're navigating mountain passes, finding authentic local cuisine, or planning your next 
              adventure, Tripify AI provides intelligent, contextual assistance—even in the most remote locations 
              where cellular coverage is non-existent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;