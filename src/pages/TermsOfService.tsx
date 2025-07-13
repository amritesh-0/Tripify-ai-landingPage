import React from 'react';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Please read these terms carefully before using Tripify AI.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Free to Use</h3>
              <p className="text-sm text-gray-600">No subscription fees or hidden costs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-sm text-gray-600">Transparent and community-driven</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Use at Own Risk</h3>
              <p className="text-sm text-gray-600">AI assistance for informational purposes</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-sm text-gray-500 mb-8">
                <strong>Last Updated:</strong> January 15, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By downloading, installing, or using Tripify AI ("the App"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms constitute a legal agreement between you and Tripify AI regarding your use of the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tripify AI is an offline artificial intelligence travel assistant that provides:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Local travel information and recommendations</li>
                  <li>Cultural insights and practical travel tips</li>
                  <li>Weather information and route suggestions</li>
                  <li>Offline AI-powered conversational assistance</li>
                  <li>Destination-specific knowledge packages</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a user of Tripify AI, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the App only for lawful purposes</li>
                  <li>Not attempt to reverse engineer or modify the App</li>
                  <li>Not redistribute or resell the App or its content</li>
                  <li>Verify important information through additional sources</li>
                  <li>Take personal responsibility for your travel decisions</li>
                  <li>Respect local laws, customs, and regulations while traveling</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations and Disclaimers</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Important Safety Notice</h3>
                      <p className="text-yellow-800">
                        Tripify AI provides AI-generated information for general guidance only. Always verify 
                        critical information through official sources, especially regarding safety, weather, 
                        and emergency procedures.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The App is provided "as is" without warranties of any kind. We specifically disclaim:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Accuracy of AI-generated travel information</li>
                  <li>Real-time accuracy of weather or route conditions</li>
                  <li>Completeness of destination information</li>
                  <li>Suitability for specific travel needs or abilities</li>
                  <li>Availability of services or attractions mentioned</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Tripify AI and its developers shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Travel delays, cancellations, or changes in plans</li>
                  <li>Inaccurate information leading to inconvenience or loss</li>
                  <li>Personal injury or property damage during travel</li>
                  <li>Loss of data or device malfunction</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Your use of the App is at your own risk, and you assume full responsibility for your travel decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The App and its content are protected by intellectual property laws:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The Tripify AI app and its AI models are proprietary technology</li>
                  <li>Destination content is compiled from various sources and curated by our team</li>
                  <li>You may not copy, modify, or distribute the App without permission</li>
                  <li>Some content may be licensed from third parties under specific terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we handle 
                  data. In summary: Tripify AI operates offline and does not collect or transmit personal data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates and Modifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Update the App to improve functionality or fix bugs</li>
                  <li>Modify these Terms with reasonable notice</li>
                  <li>Add or remove destination packages</li>
                  <li>Discontinue the service with 30 days notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may stop using the App at any time by uninstalling it from your device. We may terminate 
                  or suspend access to the App if you violate these Terms, though enforcement is limited given 
                  the offline nature of the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law 
                  principles. Any disputes shall be resolved through binding arbitration.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@tripifyai.com<br />
                    <strong>Subject:</strong> Terms of Service Inquiry
                  </p>
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Travel Responsibly</h3>
                <p className="text-blue-800">
                  Tripify AI is designed to enhance your travel experience, but it cannot replace good judgment, 
                  proper planning, and respect for local environments and communities. Always prioritize safety 
                  and responsible travel practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;