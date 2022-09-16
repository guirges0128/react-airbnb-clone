import { Outlet } from 'react-router-dom';
import Navbar from './StyleNav'
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Home;