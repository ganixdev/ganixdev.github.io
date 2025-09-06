export default function LicensePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-mono text-slate-900 py-10">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h1 className="text-xl font-bold mb-3">License</h1>
          <div className="text-sm text-slate-700 space-y-3">
            <p>This project is licensed under the MIT License.</p>
            <pre className="text-xs bg-slate-100 p-3 rounded overflow-x-auto">{`MIT License

Copyright (c) 2025 ganixdev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[Full license text should be verified in the repo]`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
