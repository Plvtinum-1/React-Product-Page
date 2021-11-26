import { useState } from 'react';
import './navbar.scss';


const Navbar = () => {

    const [active, setActive] = useState(false);

    return (
        <div className='navbar'>
            <div className={active ? 'left-menu active' : 'left-menu'}>
                <img className='close-icon' onClick={() => setActive(!active)} src="images/icon-close.svg" alt="close" />
                <div className="m-links">
                    <a className='m-link' href="#link">Collections</a>
                    <a className='m-link' href="#link">Men</a>
                    <a className='m-link' href="#link">Women</a>
                    <a className='m-link' href="#link">About</a>
                    <a className='m-link' href="#link">Contact</a>
                </div>
            </div>

            <div className="nav-right">
                <div className="menu">
                    <img className='menu-icon' onClick={() => setActive(!active)} src="/images/icon-menu.svg" alt="" />
                </div>
                <div className="logo">
                    <img className='l-logo' src="/images/logo.svg" alt="logo" />
                </div>
                <div className="links">
                    <a className='link' href="#link">Collections</a>
                    <a className='link' href="#link">Men</a>
                    <a className='link' href="#link">Women</a>
                    <a className='link' href="#link">About</a>
                    <a className='link' href="#link">Contact</a>
                </div> 
            </div>
            <div className="nav-left">
                <img className='icon' src="/images/icon-cart.svg" alt="" />
                <img className='avatar' src="/images/image-avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar
