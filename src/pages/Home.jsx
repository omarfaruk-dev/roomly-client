import ClientFeedback from '../components/ClientFeedback';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import FeaturedRoommates from '../components/RoomMates/FeaturedRoommates';
import SafetyTrust from '../components/SafetyTrust';
import { useEffect, useState } from 'react';


const Home = () => {
    const [theme, setTheme] = useState(() => {
        // Default to light mode on first load
        return 'light';
    });

    useEffect(() => {
        // Remove any previously set data-theme on <html> and <body>
        document.documentElement.removeAttribute('data-theme');
        document.body.removeAttribute('data-theme');
        // Set data-theme on <body> (DaisyUI prefers <body> for theme switching)
        document.body.setAttribute('data-theme', theme);
        document.body.style.colorScheme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            {/* Fixed Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="fixed top-1/2 left-4 z-50 btn btn-secondary btn-sm rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
                style={{ transform: 'translateY(-50%)', rotate: '-90deg' }}
                aria-label="Toggle dark mode"
            >
                {theme === 'light' ? <span>🌙</span> : <span>☀️</span>}
                <span className="hidden sm:inline">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
            <HeroSlider/>
            {/* <Banner/> */}
            <FeaturedRoommates/>
            <SafetyTrust/>
            <HowItWorks/>
            <ClientFeedback/>
        </div>
    );
};

export default Home;