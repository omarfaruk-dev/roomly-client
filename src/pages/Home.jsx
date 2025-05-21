// import Banner from '../components/Banner';
import ClientFeedback from '../components/ClientFeedback';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import FeaturedRoommates from '../components/RoomMates/FeaturedRoommates';



const Home = () => {
    return (
        <div>
            <HeroSlider/>
            {/* <Banner/> */}
            <HowItWorks/>
            <FeaturedRoommates/>
            <ClientFeedback/>
        </div>
    );
};

export default Home;