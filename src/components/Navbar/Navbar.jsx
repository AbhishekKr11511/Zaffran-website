import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {MdOutlineRestaurant} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { MainGoldenLogo, utensils } from '../../constants/images'
import { useState } from 'react'

const Links = ({name}) => {
  return(
    <>
        <li className={name}><a href="#home">Home</a></li>
        <li className={name}><a href="#about">About</a></li>
        <li className={name}><a href="#menu">Menu</a></li>
        <li className={name}><a href="#awards">Awards</a></li>
        <li className={name}><a href="#gallery">Gallery</a></li> 
        <li className={name}><a href="#findUs">Find</a></li>
    </>
  )
}

const Login = ({name}) => {
  return(
    <>
        <a href='#login' className={name}>Log In / Registration</a>
        <img src={ utensils } alt=""/>
    </>
  )
}


const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }

  return (
    <nav className='app__navbar '>

      <div className='app__navbar-logo'>
        <img src={MainGoldenLogo} alt="" id='#about'/>
      </div>

      <ul className='app__navbar-links'>
        <Links name={'p__opensans'}/>
      </ul>

      <div className='app__navbar-login p__opensans'>
        <Login name={'p__opensans'}/>
      </div>




      {/* This for the mobile version */}
      <div className='app__navbar-mobile'>
        <GiHamburgerMenu fontSize={27} onClick={()=>toggleMenu()}/>
        {showMenu? 
        <div className="app__navbar-mobile-overlay scale-up-ver-top">
          <MdOutlineRestaurantMenu fontSize={27} onClick={()=>toggleMenu()} className='overlay__close'/>

          <ul className='app__navbar-mobile-menu'>
            <Links name={"p__cormorant"}/>
          </ul>
          <div className='app__navbar-mobile-login'>
            <Login name={"p__cormorant"}/>
          </div>
        </div>
        : ""}
        
      </div>

    </nav>
  )
}
export default Navbar