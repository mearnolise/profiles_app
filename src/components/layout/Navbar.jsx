import {FaClipboardList} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
  
  return (
    
    <nav className='navbar'>
      <div className="navbar-container"> 
    
        <div className="navbar-logo-container">
          <FaClipboardList className='logo-navbar'/>
          <h2 className='profiles-text'>Profiles</h2>
        </div>

        <div className="navbar-icon-container">
          <Link to ="/"><button className='navbar-button'>HOME</button></Link>
          <Link to ="/about"><button className='navbar-button'>ABOUT</button></Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar