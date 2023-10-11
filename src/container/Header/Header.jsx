import './header.css'

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-container'>
        <p>The Only Place for Indo-Persian Cuisine</p>
      </div>

      <div className='app__header-link'>
        <button type='button' className='custom__button'>Explore</button>
      </div>
    </div>
  )
}
export default Header