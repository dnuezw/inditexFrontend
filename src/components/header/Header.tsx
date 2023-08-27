import { titles } from '../../common/titles'
import './header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <h1>{titles.app}</h1>
      <h2>{titles.product}</h2>
    </div>
  )
}

export default Header