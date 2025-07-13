import React from 'react';
import { Zap, Package, MessageCircle, Navigation, MapPin, Mountain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "🔌 Offline AI Assistance",
      description: "Get smart travel support without internet using on-device AI and RAG.",
      color: "text-green-600"
    },
    {
      icon: Package,
      title: "📦 Modular Destination Packages",
      description: "Download destination-specific bundles (e.g., Leh-Ladakh) for offline use.",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "🧠 Smart On-Device Chatbot",
      description: "Ask anything—routes, food spots, cultural tips, safety info—get instant replies offline.",
      color: "text-purple-600"
    },
    {
      icon: Navigation,
      title: "🧭 Offline Map Navigation",
      description: "Navigate using integrated GPS and maps, even in zero-connectivity zones.",
      color: "text-orange-600"
    },
    {
      icon: MapPin,
      title: "🗺️ Nearby Itinerary Discovery",
      description: "Discover local attractions, events, and scenic spots based on your location and preferences.",
      color: "text-teal-600"
    },
    {
      icon: Mountain,
      title: "🏕️ Designed for Remote Adventures",
      description: "Ideal for off-grid regions where regular travel apps fail.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Tripify AI the perfect companion for remote travel adventures
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 ${feature.color} mb-6`}>
                  <feature.icon className="w-full h-full" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;