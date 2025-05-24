

const TermsCondition = () => {
    return (
        <div className="mt-16 max-w-4xl mx-auto px-4 py-10 md:py-20">
            <title>Terms & Conditions | Roomly</title>
            <div className="flex justify-center mb-6">
                <img src="terms.svg" alt="" className='h-80'/>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Terms &amp; Conditions</h1>
            <p className="mb-6 text-accent text-lg text-center">Effective Date: May 24, 2025</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">1. Acceptance of Terms</h2>
                <p className="text-primary">By accessing or using Roomly, you agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree, please do not use our services.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">2. Use of Service</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li>You must be at least 16 years old to use Roomly.</li>
                    <li>You agree to provide accurate, current, and complete information.</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You may not use Roomly for any unlawful or prohibited purpose.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">3. Listings &amp; Content</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li>You are solely responsible for the content you post, including listings, photos, and messages.</li>
                    <li>Content must not be false, misleading, offensive, or infringe on any rights.</li>
                    <li>We reserve the right to remove any content that violates these terms or is deemed inappropriate.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">4. Account Termination</h2>
                <p className="text-primary">We may suspend or terminate your account at our discretion, without notice, if you violate these terms or engage in harmful behavior.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">5. Intellectual Property</h2>
                <p className="text-primary">All content and materials on Roomly, except user-generated content, are the property of Roomly or its licensors. You may not use, copy, or distribute any content without permission.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">6. Limitation of Liability</h2>
                <p className="text-primary">Roomly is provided "as is" without warranties of any kind. We are not liable for any damages or losses resulting from your use of the service.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">7. Changes to Terms</h2>
                <p className="text-primary">We may update these Terms &amp; Conditions at any time. Continued use of Roomly after changes constitutes acceptance of the new terms.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">8. Contact Us</h2>
                <p className="text-primary">If you have questions about these Terms &amp; Conditions, contact us at <a href="mailto:support@roomly.com" className="text-secondary underline">support@roomly.com</a>.</p>
            </section>
        </div>
    );
};

export default TermsCondition;