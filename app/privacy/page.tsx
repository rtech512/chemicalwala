import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-8 leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-bold text-white">
                1. Introduction
              </h2>

              <p className="mt-2">
                ChemicalWala respects your privacy. This Privacy Policy
                explains how information may be collected, used, stored, and
                protected when you use our website, learning resources, mock
                tests, courses, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                2. Information We Collect
              </h2>

              <p className="mt-2">
                We may collect information that you provide when creating or
                using an account, such as your name, email address, login
                information, learning activity, test attempts, scores, and
                preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                3. Account Authentication
              </h2>

              <p className="mt-2">
                ChemicalWala may use third-party authentication services,
                including Firebase Authentication, to securely manage account
                registration and login. Authentication providers may process
                information according to their own privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                4. How We Use Information
              </h2>

              <p className="mt-2">
                We may use information to provide and improve ChemicalWala,
                manage user accounts, maintain login sessions, personalize
                learning experiences, display test performance, provide
                support, prevent misuse, and improve platform security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                5. Mock Test and Learning Data
              </h2>

              <p className="mt-2">
                We may process information related to mock test attempts,
                answers, scores, progress, and learning activity to provide
                results, explanations, performance insights, and improved
                educational features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                6. Cookies and Similar Technologies
              </h2>

              <p className="mt-2">
                ChemicalWala and service providers may use cookies, local
                storage, or similar technologies for login sessions,
                preferences, security, analytics, and essential website
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                7. Third-Party Services
              </h2>

              <p className="mt-2">
                We may use trusted third-party services for authentication,
                hosting, analytics, payments, communication, or other platform
                functionality. These providers may process limited information
                necessary to deliver their services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                8. Data Sharing
              </h2>

              <p className="mt-2">
                We do not sell your personal information. Information may be
                shared with service providers when necessary to operate the
                platform, comply with legal obligations, protect users, or
                prevent fraud and misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                9. Data Security
              </h2>

              <p className="mt-2">
                We take reasonable measures to protect information from
                unauthorized access, loss, misuse, or alteration. However, no
                online service can guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                10. Data Retention
              </h2>

              <p className="mt-2">
                Information may be retained for as long as reasonably necessary
                to provide services, maintain accounts, comply with legal
                obligations, resolve disputes, and protect the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                11. Your Choices
              </h2>

              <p className="mt-2">
                Depending on applicable law and available platform features,
                you may request access, correction, or deletion of certain
                personal information associated with your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                12. Children&apos;s Privacy
              </h2>

              <p className="mt-2">
                ChemicalWala is an educational platform. Users who are not
                legally able to consent to online services in their location
                should use the platform only with appropriate parent or
                guardian involvement where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                13. Changes to This Policy
              </h2>

              <p className="mt-2">
                We may update this Privacy Policy when our services, legal
                requirements, or privacy practices change. The latest version
                will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white">
                14. Contact Us
              </h2>

              <p className="mt-2">
                If you have questions about this Privacy Policy or your
                information, please contact us through the ChemicalWala contact
                page.
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