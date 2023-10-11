import './photo.css'
import { AiOutlineInstagram } from 'react-icons/ai'

const Photo = ({instagram}) => {
  return (
    <div className='app__photos'>
        <AiOutlineInstagram className='gallery__image-icon'/>
        <img src={instagram} alt="instagram"/>
    </div>
  )
}
export default Photo