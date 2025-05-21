
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
// import Footer from '../pages/Footer';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
                {/* <Footer/> */}
                
            </footer>
        </div>
    );
};

export default MainLayout;