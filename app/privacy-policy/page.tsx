import React from 'react';

export default function PrivacyPolicy() {
  return (
   <section className='container mx-auto px-4 py-8'>
    <div className='max-w-4xl mx-auto bg-background-2 p-6 rounded-lg shadow-sm'>
      <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: 18/05/2025</p>

          <div className=" p-6 rounded-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to HushTap ("we," "us," or "our"). Your privacy is important to us. This Privacy Policy explains
              how we collect, use, store, and protect your personal data when you use the HushTap mobile app, Hush
              hardware devices, and our website at [yourdomain.com]. By using our services, you agree to the terms of
              this Privacy Policy.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What We Collect</h2>
            <p className="text-gray-700 mb-4">We collect the following types of information:</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">a. Account Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name (optional)</li>
                  <li>Email address</li>
                  <li>Password (securely hashed)</li>
                  <li>Sign-in credentials via Apple or Google</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">b. Device Setup & Wi-Fi Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    <strong>Wi-Fi SSID (network name):</strong> Collected during initial Hush device setup to help
                    reconnect your device.
                  </li>
                  <li>
                    <strong>Wi-Fi Password:</strong> Sent locally to the device during setup but never stored or
                    transmitted to our servers.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">c. Usage Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>App blocking status and history (e.g., time blocked, apps selected)</li>
                  <li>Your overall and daily blocking statistics (displayed on your profile)</li>
                  <li>Selected apps to block (locally stored)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">d. Purchase Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Whether you've purchased a Hush device or HushQR</li>
                  <li>Subscription status</li>
                  <li>Payment and order history (processed securely via Stripe)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">e. Waitlist Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Email address (if submitted via our waitlist)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We use your data to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide and maintain the HushTap service</li>
              <li>Facilitate app blocking via Apple Screen Time API</li>
              <li>Authenticate your login (email, Apple, or Google)</li>
              <li>Display your usage history and statistics</li>
              <li>Deliver customer support</li>
              <li>Detect and prevent fraudulent access to premium features</li>
              <li>Send product updates or waitlist announcements (only if opted in)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Protect Your Data</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All passwords are encrypted using industry-standard hashing algorithms.</li>
              <li>Wi-Fi credentials are never stored or transmitted beyond your local device.</li>
              <li>Communication between the app and our servers is secured via HTTPS.</li>
              <li>Stripe handles all sensitive payment information; we never store your card details.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell or share your personal data with third parties, marketing platforms, or analytics
              providers.
            </p>
            <p className="text-gray-700 mb-2">The only exceptions are:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Stripe, for secure payment processing.</li>
              <li>Apple and Google, for sign-in and authentication.</li>
              <li>Legal obligations (if required by law).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention & Deletion</h2>
            <p className="text-gray-700 mb-4">
              We retain your data only for as long as needed to operate HushTap and comply with legal obligations. You
              can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Delete your account and all associated data at any time from within the app or by emailing{" "}
                <a href="mailto:support@hushtap.com" className="text-blue-600 hover:text-blue-800">
                  support@hushtap.com
                </a>
                .
              </li>
              <li>Request a copy of your stored data via the same email.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-700">
              HushTap is not intended for children under the age of 13. We do not knowingly collect personal information
              from anyone under 13. If we discover such data, it will be deleted immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your region, you may have rights to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access the data we hold about you</li>
              <li>Correct any incorrect information</li>
              <li>Delete your data</li>
              <li>Withdraw consent to data processing</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@hushtap.com" className="text-blue-600 hover:text-blue-800">
                support@hushtap.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be posted on this page, and we'll notify
              you of significant updates via email or in-app message.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns, reach out anytime:{" "}
              <a href="mailto:support@hushtap.com" className="text-blue-600 hover:text-blue-800">
                support@hushtap.com
              </a>
            </p>
          </section>
        </div>
    </div>
   </section>
  );
}