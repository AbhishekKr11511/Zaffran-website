import './laurels.css'
import Awards from '../../components/Awards/Awards'
import {text} from './text'
import { laurels, spoon, award01, award02, award03, award05 } from '../../constants/images'
import SubsubHeading from '../../components/SubsubHeading/SubsubHeading'


const Laurels = () => {
  return (
    <div className='app__laurels section__padding'>
      <div className='app__laurels-content'>
      <SubsubHeading subtext={"Awards & Recognition"} headtext={"Our Laurels"} flex={"start"} spoonDir={true}/>

        <div className='app__laurels-content-awards'>
          <Awards image={award02} title={"Bib Gourmond"} description={text}/>
          <Awards image={award01} title={"Rising Star"} description={text}/>
          <Awards image={award05} title={"AAA Hospitality"} description={text}/>
          <Awards image={award03} title={"Outstanding Chef"} description={text}/>
        </div>
      </div>

      <div  className='app__laurels-image flex__center'>
        <img src={laurels} alt="laurelsimg" />
      </div>
    </div>
    
  )
}
export default Laurels