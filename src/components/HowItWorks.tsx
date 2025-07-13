import React from 'react';
import { Download, Package, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Download,
      title: "Install Tripify AI",
      description: "Download the base app from our website or app store. Quick setup gets you ready in minutes."
    },
    {
      step: 2,
      icon: Package,
      title: "Download Destination Package",
      description: "Select your destination (e.g., Leh-Ladakh) and download the offline AI model and local data bundle."
    },
    {
      step: 3,
      icon: MessageCircle,
      title: "Ask Your AI Assistant",
      description: "Chat with your intelligent travel companion to get local suggestions, weather updates, and travel tips—all offline."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with offline AI travel assistance in three simple steps
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-orange-300 z-0 transform translate-x-4"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;