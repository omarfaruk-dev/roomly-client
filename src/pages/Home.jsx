import ClientFeedback from '../components/ClientFeedback';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import FeaturedRoommates from '../components/RoomMates/FeaturedRoommates';
import SafetyTrust from '../components/SafetyTrust';

const Home = () => {

    return (
        <div>
            <div className='pt-10'>

                <HeroSlider />
            </div>
            <FeaturedRoommates />
            <SafetyTrust />
            <HowItWorks />
            <ClientFeedback />
        </div>
    );
};

export default Home;