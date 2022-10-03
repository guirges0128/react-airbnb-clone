import { NavLink } from "react-router-dom";
import airbnb from './Images/airbnb-brands.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink to='/' className='navbar-brand' style={({isActive}) => {return {color: isActive ? 'white' : '#0d6efd', textDecoration: 'none'}}}>
                <img src={airbnb}/>
                <span style={{fontSize: '16px'}}>News</span>
            </NavLink>
            <NavLink to='/about-us' className='menu ms-auto' style={({isActive}) => {return {color: isActive ? '#0d6efd' : 'white', textDecoration: 'none'}}}>About us</NavLink>
            <NavLink to='/media-assets' className='menu' style={({isActive}) => {return {color: isActive ? '#0d6efd' : 'white', textDecoration: 'none'}}}>Media assets</NavLink>
            <NavLink to='/product-releases' className='menu' style={({isActive}) => {return {color: isActive ? '#0d6efd' : 'white', textDecoration: 'none'}}}>Product releases</NavLink>
            <NavLink to='/contact' className='menu' id="lastMenu" style={({isActive}) => {return {color: isActive ? '#0d6efd' : 'white', textDecoration: 'none'}}}>Contact</NavLink>
        </nav>
    )
}

export default Navbar;