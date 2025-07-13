import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect your data.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">No Data Collection</h3>
              <p className="text-sm text-gray-600">We don't collect personal data</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">No Tracking</h3>
              <p className="text-sm text-gray-600">No analytics or user tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Database className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Local Storage</h3>
              <p className="text-sm text-gray-600">All data stays on your device</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Lock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">No Ads</h3>
              <p className="text-sm text-gray-600">No advertising or third parties</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-sm text-gray-500 mb-8">
                <strong>Last Updated:</strong> January 15, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tripify AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how our mobile application collects, uses, and protects your information when you use 
                  our offline AI travel assistant.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike most mobile applications, Tripify AI is designed with privacy-first principles. Our app 
                  operates entirely offline after initial setup, meaning your personal data never leaves your device.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Don't Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tripify AI is built on the principle of data minimization. We explicitly do NOT collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Location data or GPS coordinates</li>
                  <li>Chat conversations or queries made to the AI assistant</li>
                  <li>Usage analytics or behavioral data</li>
                  <li>Device identifiers or advertising IDs</li>
                  <li>Photos, contacts, or other personal files</li>
                  <li>Network activity or browsing history</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How the App Works</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tripify AI operates using on-device artificial intelligence:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Download Phase:</strong> You download destination-specific AI models and data packages</li>
                  <li><strong>Offline Operation:</strong> All AI processing happens locally on your device</li>
                  <li><strong>No Internet Required:</strong> After setup, the app works completely offline</li>
                  <li><strong>Local Storage:</strong> All data is stored locally and never transmitted</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All application data is stored locally on your device using standard mobile security practices:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Data is stored in the app's private storage area</li>
                  <li>No data is transmitted to external servers during normal operation</li>
                  <li>You can delete all app data by uninstalling the application</li>
                  <li>No backup or sync services are used</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Permissions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tripify AI requests minimal permissions:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Storage:</strong> To save downloaded destination packages and user preferences</li>
                  <li><strong>Network (Initial Setup Only):</strong> To download AI models and destination data</li>
                  <li><strong>Location (Optional):</strong> For location-aware suggestions (processed locally only)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Location permission is entirely optional and can be denied without affecting core functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tripify AI does not integrate with any third-party analytics, advertising, or tracking services. 
                  We do not use crash reporting tools, user analytics, or any external SDKs that could collect user data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our app does not collect any personal information from anyone, including children under 13. 
                  Since no data collection occurs, COPPA compliance is inherently maintained.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated "Last Updated" date. Since we don't collect contact information, we cannot 
                  notify users directly of changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@tripifyai.com<br />
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </p>
                </div>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Privacy-First Commitment</h3>
                <p className="text-blue-800">
                  Tripify AI was built from the ground up with privacy as a core principle. We believe that 
                  powerful AI assistance shouldn't come at the cost of your personal privacy. Your travel 
                  experiences and conversations with our AI remain completely private to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;