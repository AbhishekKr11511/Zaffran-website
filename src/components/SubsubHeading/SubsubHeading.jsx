import './subsubHeading.css'
import {spoon, spoonR} from '../../constants/images'


const SubsubHeading = ({subtext, headtext, flex, spoonDir}) => {
  return (
    <div className='app__subsubheading' id={flex}>
        <p className='p__cormorant text__shadow'>{subtext}</p>
        {spoonDir?
        <img src={spoon} alt="spoon" />
        :<img src={spoonR} alt="spoon" />}
        <p className='headtext__cormorant'>{headtext}</p>
    </div>
  )
}
export default SubsubHeading