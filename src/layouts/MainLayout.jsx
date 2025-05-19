
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const MainLayout = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;