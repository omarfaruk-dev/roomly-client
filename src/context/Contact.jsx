import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for reaching out. We will get back to you soon.',
            confirmButtonColor: '#6366f1',
        });
        e.target.reset();
    };
    return (
        <section className="mt-16 flex flex-col items-center justify-center bg-gradient-to-br from-secondary/10 via-base-100 to-base-200 py-16 px-4">
            <div className="max-w-xl w-full bg-white/80 rounded-md shadow-md p-8">
                <h1 className="text-3xl font-extrabold text-primary mb-2 text-center">Contact Us</h1>
                <p className="text-accent mb-6 text-center">We'd love to hear from you! Fill out the form below or reach us directly at <a href="mailto:hello@roomly.com" className="text-secondary underline font-semibold">hello@roomly.com</a>.</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@email.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-primary mb-1">Message</label>
                        <textarea className="w-full px-4 py-2 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30" rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="mt-2 bg-primary text-white font-bold py-2 rounded-md shadow-md hover:bg-secondary transition-colors">Send Message</button>
                </form>
                <div className="mt-8 text-center">
                    <h2 className="text-lg font-bold text-secondary mb-2">Other Ways to Connect</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://twitter.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Twitter</a>
                        <a href="https://facebook.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Facebook</a>
                        <a href="https://instagram.com/roomly" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Instagram</a>
                    </div>
                </div>
                <div className="mt-10 border-t border-secondary/20 pt-8">
                    <h2 className="text-lg font-bold text-primary mb-2 text-center">Frequently Asked Questions</h2>
                    <FAQAccordion />
                </div>
                <div className="mt-10 text-center">
                    <h2 className="text-lg font-bold text-primary mb-2">Our Office</h2>
                    <p className="text-accent mb-1">Roomly HQ, 123 Startup Lane, Dhaka, Bangladesh</p>
                    <p className="text-accent">Open: Sun–Thu, 9:00am–6:00pm</p>
                </div>
            </div>
        </section>
    );
};

// FAQ Accordion Component
const FAQAccordion = () => {
    const faqs = [
        {
            question: 'How quickly will I get a response?',
            answer: 'We aim to reply to all inquiries within 24 hours, Monday to Friday.'
        },
        {
            question: 'Can I request a feature or report a bug?',
            answer: 'Absolutely! Use the form above or email us directly. We value your feedback and ideas.'
        },
        {
            question: 'Is my information safe?',
            answer: 'Yes, your privacy is important to us. All messages are confidential and handled securely.'
        }
    ];
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="max-w-lg mx-auto">
            {faqs.map((faq, idx) => (
                <div key={idx} className="mb-3 border border-secondary/20 rounded-md bg-white/60">
                    <button
                        type="button"
                        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-secondary focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                    >
                        {faq.question}
                        <span className="ml-2 text-primary">{openIndex === idx ? '-' : '+'}</span>
                    </button>
                    {openIndex === idx && (
                        <div className="px-4 pb-3 text-accent text-sm animate-fade-in">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Contact;