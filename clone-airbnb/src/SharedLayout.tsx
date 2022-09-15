import { Outlet } from 'react-router-dom';
import Navbar from './StyleNav'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Home;