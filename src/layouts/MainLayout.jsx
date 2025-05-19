
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;