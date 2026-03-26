import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";
import Button from './button';
function Nav() {
    return (
        <>
            <div className='header'>
                <div className='container'>
                <div className='header-bar d-flex justify-content-between align-items-center'>
                    <img src={logo} alt="logo"/>
                    <div className='d-flex justify-content-between'>
                         <nav className='nav-menu'>
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/career'>Career</Link>
                    </nav>
                        <Button text={'Contact Us'}/>
                    </div>
                   
                    
                </div>
            </div>
            </div>
        </>
    )
}
export default Nav;