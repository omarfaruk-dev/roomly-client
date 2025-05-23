import { Fade, Slide } from "react-awesome-reveal";
import { FaComments, FaHandsHelping, FaLock, FaShieldAlt, FaUserCheck } from "react-icons/fa";

const SafetyTrust = () => (
  <section className="max-w-7xl mx-auto px-4 pt-10 md:pt-20 lg:pt-30">
    <Slide direction="left" delay={300} duration={1000}>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-2">
        <span className="text-secondary">Safety</span> &amp; <span className="text-primary">Trust</span>
      </h2>
    </Slide>
    <Slide direction="right" delay={300} duration={1000}>
      <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
        Your peace of mind is our top priority. Roomly is built with safety and trust at its core, so you can connect and find your next home with confidence.
      </p>
    </Slide>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <Slide direction="left" delay={300} duration={1000}>
        <div className="flex flex-col items-center text-center bg-base-200 rounded-md shadow-md p-6 border-l-4 border-secondary/20 hover:scale-102 hover:border-secondary transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm mb-3">
            <FaShieldAlt />
          </div>
          <h3 className="font-semibold text-primary mb-1">Verified Listings</h3>
          <p className="text-accent text-sm">Every room and roommate is reviewed for authenticity and quality.</p>
        </div>
      </Slide>
      <Slide direction="right" delay={300} duration={1000}>
        <div className="flex flex-col items-center text-center bg-base-200 rounded-md shadow-md p-6 border-l-4 border-secondary/20 hover:scale-102 hover:border-secondary transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm mb-3">
            <FaUserCheck />
          </div>
          <h3 className="font-semibold text-primary mb-1">Profile Verification</h3>
          <p className="text-accent text-sm">User profiles are checked to help you connect with real people only.</p>
        </div>
      </Slide>
      <Slide direction="left" delay={300} duration={1000}>
        <div className="flex flex-col items-center text-center bg-base-200 rounded-md shadow-md p-6 border-l-4 border-secondary/20 hover:scale-102 hover:border-secondary transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm mb-3">
            <FaComments />
          </div>
          <h3 className="font-semibold text-primary mb-1">Secure Messaging</h3>
          <p className="text-accent text-sm">Chat safely before sharing personal info and build trust.</p>
        </div>
      </Slide>
      <Slide direction="right" delay={300} duration={1000}>
        <div className="flex flex-col items-center text-center bg-base-200 rounded-md shadow-md p-6 border-l-4 border-secondary/20 hover:scale-102 hover:border-secondary transition-transform duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm mb-3">
            <FaLock />
          </div>
          <h3 className="font-semibold text-primary mb-1">Privacy Protection</h3>
          <p className="text-accent text-sm">Your info is protected & never shared without your consent.</p>
        </div>
      </Slide>
    </div>
    <Fade delay={200}>
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-2 bg-secondary/10 px-6 py-2 rounded-full text-secondary font-medium text-xs md:text-base shadow-sm">
          <FaHandsHelping className="text-lg" />
          24/7 Support &amp; Community Guidelines
        </div>
      </div>
    </Fade>
  </section>
);

export default SafetyTrust;