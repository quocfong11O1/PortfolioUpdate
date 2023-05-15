import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

// import style
import './navbar.css'

// menu
const Menu = () => {
    return(
        <React.Fragment>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#project">Projects</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#contact">Contact</a></p>
        </React.Fragment>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-logo">
                <h1><a href="#home">Phong.dev</a></h1>
            </div>

            <div className="portfolio__navbar-content">
                <Menu/>
            </div>

            <div className="portfolio__navbar-menu">

                {
                    toggleMenu ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)}/>
                }

                {
                    toggleMenu && (
                        <div className="portfolio__navbar-menu_container">
                            <Menu/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Navbar
