import { titles } from '../../common/titles'
import './header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <h1>{titles.app}</h1>
    </div>
  )
}

export default Header
