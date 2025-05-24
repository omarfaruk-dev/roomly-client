import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Privacy = () => {
    return (
        <div className="mt-16 max-w-4xl mx-auto px-4 py-10 md:py-20">
            <div className="flex justify-center mb-6">
                <DotLottieReact
                    src="https://lottie.host/6267bac1-7e29-4ca9-af6e-493c2cac70f6/y3BcqAa7DL.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', maxWidth: '750px' }}
                />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>
            <p className="mb-6 text-accent text-lg text-center">Effective Date: May 24, 2025</p>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">1. Introduction</h2>
                <p className="text-primary">Roomly is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">2. Information We Collect</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li><span className="font-medium">Personal Information:</span> Name, email address, profile photo, and other information you provide when creating an account or listing.</li>
                    <li><span className="font-medium">Usage Data:</span> Pages visited, features used, and actions taken on Roomly.</li>
                    <li><span className="font-medium">Cookies & Tracking:</span> We use cookies and similar technologies to enhance your experience and analyze usage.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li>To provide, operate, and maintain Roomly services.</li>
                    <li>To personalize your experience and show relevant listings.</li>
                    <li>To communicate with you about your account, listings, or updates.</li>
                    <li>To improve our website, features, and user experience.</li>
                    <li>To ensure safety, security, and prevent fraud.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">4. Information Sharing & Disclosure</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li>We do <span className="font-bold">not</span> sell your personal information.</li>
                    <li>We may share information with trusted service providers who help us operate Roomly (e.g., hosting, analytics, authentication).</li>
                    <li>We may disclose information if required by law or to protect our rights and users.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">5. Data Security</h2>
                <p className="text-primary">We implement industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">6. Your Choices & Rights</h2>
                <ul className="list-disc pl-6 text-primary">
                    <li>You can update or delete your profile information at any time.</li>
                    <li>You may opt out of non-essential communications.</li>
                    <li>Contact us to request access, correction, or deletion of your data.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">7. Children's Privacy</h2>
                <p className="text-primary">Roomly is not intended for children under 16. We do not knowingly collect personal information from children.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">8. Changes to This Policy</h2>
                <p className="text-primary">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-secondary mb-2">9. Contact Us</h2>
                <p className="text-primary">If you have any questions or concerns about this Privacy Policy or your data, please contact us at <a href="mailto:support@roomly.com" className="text-secondary underline">support@roomly.com</a>.</p>
            </section>
        </div>
    );
};

export default Privacy;