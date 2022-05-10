import {FaFacebook,FaGoogle} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer-icon-container'>
        <FaFacebook className='footer-icon'/>
        <FaGoogle className='footer-icon' />
    </div>
    <div>
      <p>No Copyright &copy; All right use</p>
    </div>
    </div>
  )
}

export default Footer