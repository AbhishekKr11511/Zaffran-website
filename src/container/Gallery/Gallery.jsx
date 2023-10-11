import './gallery.css'
import SubsubHeading from '../../components/SubsubHeading/SubsubHeading'
import Photo from '../../components/Photo/Photo'
import { gallery01,gallery02,gallery03,gallery04,gallery05,gallery06,gallery07,gallery08,gallery09,gallery10,gallery11,gallery12,gallery13,gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery20,galleryBG } from '../../constants/images'
import { useState } from 'react'

const Gallery = () => {

  const [displayGallery, setDisplayGallery] = useState(false);

  
  
  return (
    <div className='app__container'>
      <div className='app__gallery-container'>
      <div className='app__gallery-content flex__center section__padding'>
        <SubsubHeading subtext={"Instagram"} headtext={"Photo Gallery"} flex={"center"} spoonDir={true}/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium doloribus, perferendis unde praesentium tempora hic ipsa fugit adipisci inventore veritatis veniam labore neque corrupti dignissimos fuga nesciunt explicabo placeat?</p>

        <button type='button' className='custom__button' onClick={()=>setDisplayGallery(!displayGallery)}>View More</button>
      </div>
    </div>
    <div>
        {displayGallery? 
        <div className='app__gallery-photos slide-bottom'>
          <div className='app__gallery-grid'>
            <Photo instagram={gallery01}/>
            <Photo instagram={gallery02}/>
            <Photo instagram={gallery03}/>
            <Photo instagram={gallery04}/>
            <Photo instagram={gallery05}/>
            <Photo instagram={gallery06}/>
            <Photo instagram={gallery07}/>
            <Photo instagram={gallery08}/>
            <Photo instagram={gallery09}/>
            <Photo instagram={gallery10}/>
            <Photo instagram={gallery12}/>
            <Photo instagram={gallery13}/>
            <Photo instagram={gallery15}/>
            <Photo instagram={gallery16}/>
            <Photo instagram={gallery17}/>
          </div>
        </div>
        
          : ""
        }
    </div>
    

    </div>
  )
}
export default Gallery