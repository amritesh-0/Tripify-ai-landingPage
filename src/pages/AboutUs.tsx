import React from 'react';
import { Mountain, Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tripify AI</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're passionate adventurers building technology to make remote travel safer and more accessible.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Tripify AI, we believe that everyone should have access to intelligent travel assistance, 
              regardless of internet connectivity. Our mission is to empower adventure travelers with 
              AI-powered tools that work seamlessly in the world's most remote and beautiful destinations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're democratizing access to local knowledge and travel intelligence, ensuring that 
              language barriers, connectivity issues, and unfamiliarity with local customs never 
              stand in the way of incredible adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adventure First</h3>
              <p className="text-gray-600">We're travelers ourselves, building for the community we love.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy Focused</h3>
              <p className="text-gray-600">Your data stays on your device. No tracking, no ads, no compromises.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing the boundaries of what's possible with on-device AI.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building tools that bring travelers together and support local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Tripify AI was born from a frustrating experience during a trek in Leh-Ladakh. Our founder, 
                an avid adventure traveler, found themselves stranded without internet connectivity, unable 
                to access crucial information about local customs, weather patterns, and safe routes.
              </p>
              <p>
                That moment sparked an idea: What if travelers could have access to intelligent, contextual 
                assistance even in the most remote locations? What if AI could be truly portable, working 
                entirely offline while still providing personalized, location-aware guidance?
              </p>
              <p>
                After months of research into on-device AI technologies and partnerships with local travel 
                experts, Tripify AI emerged as the first truly offline AI travel assistant. We've combined 
                cutting-edge language models with comprehensive local knowledge bases to create an experience 
                that feels like having a knowledgeable local guide in your pocket.
              </p>
              <p>
                Today, we're expanding beyond Leh-Ladakh to cover more remote destinations, always with the 
                same commitment to privacy, offline functionality, and authentic local insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We're a small but passionate team of travelers, technologists, and local experts working 
              together to revolutionize how people explore remote destinations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our diverse backgrounds in AI research, mobile development, travel industry expertise, 
              and local cultural knowledge allow us to create products that are both technically 
              sophisticated and culturally authentic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;