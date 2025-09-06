export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-mono text-slate-900 py-10">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h1 className="text-xl font-bold mb-3">Contact</h1>
          <div className="text-sm text-slate-700 space-y-3">
            <p>If you have questions, bug reports, or feature requests, open an issue on the repository:</p>
            <p><a href="https://github.com/ganixdev/linksan-ios/issues" className="text-indigo-600">https://github.com/ganixdev/linksan-ios/issues</a></p>
            <p>Or email: <a href="mailto:ghani.utf8@gmail.com" className="text-indigo-600">ghani.utf8@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
