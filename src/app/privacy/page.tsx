export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-mono text-slate-900 py-10">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h1 className="text-xl font-bold mb-3">Privacy Policy</h1>
          <div className="text-sm text-slate-700 space-y-3">
            <div><strong>Last Updated:</strong> September 2025</div>
            <p>LinkSan is a URL sanitization app that removes tracking parameters from URLs to protect your privacy. We are committed to protecting your privacy and being transparent about our data practices.</p>
            <h3 className="font-semibold">Data We Do Not Collect</h3>
            <ul className="list-disc ml-5 text-slate-600">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>URLs you process through the app</li>
              <li>Browsing history or habits</li>
              <li>Device identifiers or location information</li>
              <li>Analytics or usage data</li>
            </ul>
            <h3 className="font-semibold">How LinkSan Works</h3>
            <p className="text-slate-600">All URL processing happens locally on your device. No URLs are sent to external servers, and no user data is stored or cached. The app works completely offline after installation.</p>
            <h3 className="font-semibold">Third-Party Services</h3>
            <p className="text-slate-600">LinkSan does not integrate with any third-party analytics, advertising, or data collection services.</p>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-slate-600">For privacy questions: <a className="text-indigo-600" href="mailto:ghani.utf8@gmail.com">ghani.utf8@gmail.com</a></p>
            <p className="text-slate-500 text-xs">We will update this policy if our practices change. Users will be notified of any material changes through app updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
