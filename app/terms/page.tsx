import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/signup"
          className="mb-8 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Sign Up
        </Link>

        <div className="rounded-3xl border border-white/10 bg-[#0d2030] p-6 shadow-2xl sm:p-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-8 leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mt-2">
                By accessing or using ChemicalWala, you agree to follow these
                Terms & Conditions. If you do not agree with these terms,
                please do not use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                2. Educational Purpose
              </h2>
              <p className="mt-2">
                ChemicalWala provides educational content including notes,
                MCQs, mock tests, courses, and exam preparation resources.
                Content is intended for learning and practice purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                3. User Accounts
              </h2>
              <p className="mt-2">
                You are responsible for providing accurate information,
                maintaining the confidentiality of your account credentials,
                and all activities performed through your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                4. Mock Tests and Results
              </h2>
              <p className="mt-2">
                Mock test scores, rankings, explanations, and performance
                reports are provided for practice and self-assessment. They do
                not guarantee selection, employment, examination success, or
                any official result.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                5. Payments, Offers and Coupons
              </h2>
              <p className="mt-2">
                Prices, discounts, promotional offers, coupons, validity
                periods, and access benefits may change from time to time.
                Specific terms shown at the time of enrollment will apply to
                that purchase or offer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                6. Intellectual Property
              </h2>
              <p className="mt-2">
                Unless otherwise stated, ChemicalWala content, branding,
                designs, original questions, explanations, and learning
                materials may not be copied, republished, sold, or distributed
                without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                7. Prohibited Use
              </h2>
              <p className="mt-2">
                Users must not misuse the platform, attempt unauthorized
                access, disrupt services, copy protected content in bulk, or
                use ChemicalWala for unlawful activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                8. Availability and Changes
              </h2>
              <p className="mt-2">
                We may update, modify, suspend, or discontinue features,
                content, tests, courses, or services when necessary. We may
                also update these Terms & Conditions from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                9. Limitation of Liability
              </h2>
              <p className="mt-2">
                ChemicalWala is not responsible for losses arising from
                reliance on educational content, temporary service
                interruptions, third-party services, or user misuse of the
                platform, to the extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                10. Contact
              </h2>
              <p className="mt-2">
                If you have questions about these Terms & Conditions, please
                contact us through the ChemicalWala contact page.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <Link
              href="/"
              className="font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              ← Return to ChemicalWala
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}