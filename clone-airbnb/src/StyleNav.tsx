import { NavLink } from "react-router-dom";
import airbnb from './Images/airbnb-brands.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink to='/' className='me-3 ms-5' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>
                <img src={airbnb}/>
                <span style={{fontSize: '16px'}}>News</span>
            </NavLink>
            <NavLink to='/about-us' className='me-3 ms-auto' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>About us</NavLink>
            <NavLink to='/media-assets' className='me-3 ms-3' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>Media assets</NavLink>
            <NavLink to='/product-releases' className='me-3 ms-3' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>Product releases</NavLink>
            <NavLink to='/contact' className='me-3 ms-3' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>Contact</NavLink>
        </nav>
    )
}

export default Navbar;