
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
// import Footer from '../pages/Footer';

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
                {/* <Footer/> */}
            </footer>
        </div>
    );
};

export default MainLayout;