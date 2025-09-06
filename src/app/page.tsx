export default function Home() {
  return (
  <div className="min-h-screen bg-slate-50 text-slate-900 font-mono">
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-lg shadow-md flex items-center justify-center text-white font-bold">LS</div>
            <div className="text-lg font-semibold">LinkSan</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-slate-700 hover:text-indigo-600">Features</a>
            <a href="#download" className="text-slate-700 hover:text-indigo-600">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Compact */}
      <section className="py-8 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Clean your links</h1>
              <p className="text-sm text-slate-600 mb-4">Remove trackers, shorten YouTube links and share clean URLs — all locally on your device.</p>
              <div className="flex gap-3 justify-center">
                <a href="#download" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 text-sm font-semibold shadow-sm">Get LinkSan</a>
              </div>
            </div>
            <div className="mt-5 border-t pt-4 text-xs text-slate-500">Built with privacy-first principles — no network requests, local processing, and native iOS integration.</div>
          </div>
        </div>
      </section>

      {/* Features Section - Compact */}
      <section id="features" className="py-6 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-2">What it does</h2>
          <p className="text-sm text-slate-600 mb-4">Compact, local, and privacy-first URL cleaning for iOS (and macOS).</p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">📋</div>
              <div>
                <div className="font-semibold">Smart Paste</div>
                <div className="text-sm text-slate-600">Automatically detect and grab URLs from your clipboard.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">🔁</div>
              <div>
                <div className="font-semibold">Sanitize from any app</div>
                <div className="text-sm text-slate-600">Use the share sheet or the Action Extension to clean URLs from anywhere.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">⬇️</div>
              <div>
                <div className="font-semibold">Pull-to-refresh</div>
                <div className="text-sm text-slate-600">Instant content updates with a natural gesture.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">🏷️</div>
              <div>
                <div className="font-semibold">Informative tracker chips</div>
                <div className="text-sm text-slate-600">Visual categories for trackers with tap-to-learn details.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">📦</div>
              <div>
                <div className="font-semibold">Multi-URL support</div>
                <div className="text-sm text-slate-600">Process entire lists of URLs at once for bulk operations.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-9 h-9 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center">�</div>
              <div>
                <div className="font-semibold">Fully local & no tracking</div>
                <div className="text-sm text-slate-600">All processing happens on-device — no analytics, no network requests.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section - Compact */}
      <section id="download" className="py-6 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-2">Get LinkSan</h2>
          <p className="text-sm text-slate-600 mb-4">Install on iOS for native share-sheet support. Android support is coming soon.</p>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold">iOS App</div>
                <div className="text-sm text-slate-600">Action Extension, Smart Paste, and native share-sheet support.</div>
              </div>
              <a href="https://apps.apple.com/app/linksan" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">Download</a>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold">Android</div>
                <div className="text-sm text-slate-600">APK / Play store coming soon — same privacy-first behavior.</div>
              </div>
              <a href="#" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm">Download</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="border-t border-slate-200 py-6">
        <div className="max-w-xl mx-auto px-4 text-center text-sm text-slate-600">
          <div className="font-semibold mb-1">LinkSan</div>
          <div className="mb-2">Protect your privacy, one link at a time.</div>
          <div className="flex justify-center gap-4 mb-2">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </div>
          <div className="text-xs text-slate-500 mb-2">
            <div>Privacy policy: <a href="https://raw.githubusercontent.com/ganixdev/linksan-ios/stable/PRIVACY_POLICY.md" className="text-indigo-600">PRIVACY_POLICY.md</a></div>
            <div>License: <a href="https://raw.githubusercontent.com/ganixdev/linksan-ios/stable/LICENSE" className="text-indigo-600">MIT</a></div>
            <div>Contact: <a href="mailto:ghani.utf8@gmail.com" className="text-indigo-600">ghani.utf8@gmail.com</a></div>
          </div>
          <div className="text-xs text-slate-400">© 2025 LinkSan. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
