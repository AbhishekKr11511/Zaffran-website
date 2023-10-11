import './footer.css'
import Subsubheading from '../../components/SubsubHeading/SubsubHeading'
import {MainLogoEx} from '../../constants/images'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-newsletter section__padding'>
        <Subsubheading subtext={"Newsletter"} headtext={"Subscribe To Our Newsletter"} spoonDir={true} flex={"center"}/>
        <p className='p__opensans grey'>And never miss any latest Updates!</p>

        <form action="" className='app__footer-newletter-form'>
          <input type="email" placeholder='Email Address'/>
          <button className='custom__button'>Subscribe</button>
        </form>
      </div>

        <div className='app__footer-content flex__center section__padding'>

          <div>
            <p className='p__cormorant'>Contact Us</p>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>

          <div className='flex__centerCol'>
            <img src={MainLogoEx} alt="logo" className='logoimage'/>
            <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          </div >

          <div >
            <p className='p__cormorant'>Working Hours</p>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>

        </div>

        <p className='app__footer-copyright p__opensans'>2023 Zaffran. All Rights Reserved</p>

    </div>
  )
}
export default Footer