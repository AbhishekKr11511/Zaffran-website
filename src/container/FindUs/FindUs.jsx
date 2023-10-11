import { SubsubHeading } from '../../components'
import './findus.css'
import {collageWhite} from '../../constants/images'

const FindUs = () => {
  return (
    <div className='app__findus section__padding'>
      <div className='app__findus-content'>
        <SubsubHeading subtext={"Contact"} headtext={"Find Us"} flex={"start"} spoonDir={true}/>
        <p className='p__opensans'>Lane Ends Bunglow, Whatcroft Hall Lane, Rudheath, CW9</p>
        <p className='golden__text p__cormorant'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri 10:00 am - 2:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='custom__button'>Visit Us</button>
      </div>

      <div className='app__findus-image'>
        <img src={collageWhite} alt="collage" />
      </div>

    </div>
  )
}
export default FindUs