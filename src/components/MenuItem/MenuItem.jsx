import './menuitem.css'

const MenuItem = ({title, tags, price}) => {
  return (
    <li className='app__menuItem'>

      <div className='app__menuItem-up'>
        <p className='app__menuItem-title'>{title}</p>
        <div className='app__menuItem-line'></div>
        <p className='app__menuItem-price'>{price}</p>
      </div>

      <div className='app__menuItem-down'>
        <p className='app__menuItem-tags'>{tags}</p>
      </div>

    </li>
  )
}
export default MenuItem