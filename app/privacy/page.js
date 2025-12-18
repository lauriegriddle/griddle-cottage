export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">❄️ Privacy Policy ❄️</h1>
          <p className="text-slate-300 text-center mb-8">Letter Griddle Cottage</p>
          
          <div className="space-y-6 text-slate-200">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Information We Collect</h2>
              <p>Letter Griddle Cottage is designed with your privacy in mind. We collect minimal data:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                <li>Game statistics (stored locally on your device)</li>
                <li>Basic analytics (page views, general usage patterns)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Local Storage</h2>
              <p className="text-slate-300">Your game progress, settings, and statistics are stored locally in your browser. This data never leaves your device and is not transmitted to our servers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Analytics</h2>
              <p className="text-slate-300">We use privacy-friendly analytics (Vercel Analytics) to understand how players use our game. This helps us improve the experience. No personally identifiable information is collected.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Cookies</h2>
              <p className="text-slate-300">Letter Griddle Cottage does not use tracking cookies. Any cookies used are essential for the game to function properly.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Third-Party Services</h2>
              <p className="text-slate-300">Our game is hosted on Vercel. Please refer to Vercel's privacy policy for information about their data practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Children's Privacy</h2>
              <p className="text-slate-300">Letter Griddle Cottage is a family-friendly game suitable for all ages. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
              <p className="text-slate-300">If you have questions about this privacy policy, please contact us at lettergriddle@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Changes to This Policy</h2>
              <p className="text-slate-300">We may update this privacy policy from time to time. Any changes will be posted on this page.</p>
            </section>

            <p className="text-slate-400 text-sm mt-8">Last updated: December 2025</p>
          </div>

          <div className="mt-8 text-center">
            <a href="/" className="inline-block bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-all">
              ← Back to Game
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-slate-400 text-sm">
          © 2025 Letter Griddle Cottage. Part of the Letter Griddle Family.
        </div>
      </div>
    </div>
  );
}