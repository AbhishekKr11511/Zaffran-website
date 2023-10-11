import './chef.css'
import { chefBorder,quote,feather,spoon } from '../../constants/images'
import SubsubHeading from '../../components/SubsubHeading/SubsubHeading'


const Chef = () => {
  return (
    <div className='app__chef section__padding'>

      {/* This is the first flex box */}
      <div className='app__chef-image'>
        <img src={chefBorder} alt="chef" />
      </div>

      {/* This is second flex box */}
      <div className='app__chef-content'>
        <div className='app__chef-content-title'>
        <SubsubHeading subtext={"Chef's Word"} headtext={"What We Believe In"} flex={"start"} spoonDir={true}/>
        </div>

        <div className='app__chef-content-paragraph'>
            <p><img src={quote} alt="quote" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum, officia eligendi voluptatum corrupti ducimus voluptatem aliquam dolores, quia impedit animi? Et facilis iure praesentium, harum nesciunt eligendi. Expedita, iure!</p>
        </div>

        <div className='app__chef-content-regards'>
          <div>
            <p className='app__chef-content-regards-name'>Ashish Chopra</p>
            <p className='app__chef-content-regards-position'>Chef & Co-Founder
            </p>
          </div>
          <img src={feather} alt="feather" />
        </div>

      </div>

    </div>
  )
}
export default Chef