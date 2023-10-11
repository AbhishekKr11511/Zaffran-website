import './aboutus.css'
import {knifeZ} from '../../constants/images'
import SubsubHeading from '../../components/SubsubHeading/SubsubHeading'


const AboutUs = () => {
  return (
    <div className='app__about fade-in-bottom'>
      {/* <div>
        <img src={knifeZ} alt="" />
      </div> */}
        <div className='app__about-container-content'>
          <div className='app__about-container-title'>
          <SubsubHeading subtext={"A little Intro"} headtext={"About Us"} flex={"end"} spoonDir={false}/>
            <p className='end p__opensans text__shadow'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, accusamus soluta vero maxime cupiditate, possimus odit earum natus commodi magni iste porro dolores molestias? Itaque neque nihil ratione porro nesciunt!
            </p>
          </div>
          <div className='app__about-container-knife'>
            <img src={knifeZ} alt="knife" />
          </div>
          <div className='app__about-container-title'>
          <SubsubHeading subtext={"Since 1969"} headtext={"History"} flex={"start"} spoonDir={true}/>
            <p className='start p__opensans text__shadow'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, accusamus soluta vero maxime cupiditate, possimus odit earum natus commodi magni iste porro dolores molestias? Itaque neque nihil ratione porro nesciunt!
            </p>
          </div>
        </div>

    </div>
  )
}
export default AboutUs