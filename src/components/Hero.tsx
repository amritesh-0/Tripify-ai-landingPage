import React from 'react';
import { Download, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 mr-3 text-orange-400" />
              <h1 className="text-3xl md:text-4xl font-bold">Tripify AI</h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your AI Travel Guide That Works 
              <span className="text-orange-400"> Without Internet .</span> 

            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              AI That Travels With You — Even Off the Grid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/amritesh-0/Tripify-ai.git" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                Coming to App Stores
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-auto bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <img 
                  src="/src/assests/image.png" 
                  alt="Tripify AI App Interface" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-64 h-full bg-blue-400 rounded-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;