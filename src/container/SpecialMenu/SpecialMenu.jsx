import './specialmenu.css'
import {glass} from '../../constants/images'
import {cocktails, wines} from '../../constants/data'
import MenuItem from '../../components/MenuItem/MenuItem'
import SubsubHeading from '../../components/SubsubHeading/SubsubHeading'


const SpecialMenu = () => {
  return (
    <div className='app__specialMenu'>

      {/* This is the title of the component */}
      <div className='app__specialMenu-title'>
      <SubsubHeading subtext={"Menu That Fits Your Palette"} headtext={"Todays's Special"} flex={"center"} spoonDir={true}/>
      </div>


      <div className='app__specialMenu-content section__padding'>

        {/* This is the contents or menu of the restaurant */}
        <div className='app__specialMenu-content-bevrage'>
          <p className='p__cormorant'>Wine & Beer</p>

          <ul className='app__specialMenu-data'>
          {wines.map(item=>{
              return <MenuItem title={item.title} price={item.price} tags={item.tags}/>
            })}
          </ul>
          
        </div>

        {/* This is the blinking cocktail glass */}
        <div className='app__specialMeni-content-glass'>
          <img src={glass} alt="glass" className='flicker-out-glow'/>
        </div>

        {/* This is the contents or menu of the restaurant */}
        <div className='app__specialMenu-content-bevrage'>
          <p className='p__cormorant'>Cocktails</p>

          <ul className='app__specialMenu-data'>
            {cocktails.map(item=>{
              return <MenuItem title={item.title} price={item.price} tags={item.tags}/>
            })}
          </ul>

        </div>

      </div>

    </div>

  )
}
export default SpecialMenu