import './awards.css'

const Awards = ({image, title, description}) => {
  return (
    <div className='app__awards'>
        <div className='app__awards-image'>
            <img src={image} alt="award" />
        </div>

        <div className='app__awards-content'>
            <p className='app__awards-content-title p__cormorant'>{title}</p>
            <p className='app__awards-content-description p__opensans'>{description}</p>
        </div>

    </div>
  )
}
export default Awards