import Banner from '../components/Banner';
import FeaturedRoommates from '../components/RoomMates/FeaturedRoommates';
// import HeroSlider from '../components/HeroSlider';

const Home = () => {
    return (
        <div>
            {/* <HeroSlider/> */}
            <Banner/>
            <FeaturedRoommates/>
        </div>
    );
};

export default Home;