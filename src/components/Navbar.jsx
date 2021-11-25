import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-right">
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
