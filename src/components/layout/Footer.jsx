import {FaFacebook,FaGoogle,FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer-icon-container'>
        <FaFacebook className='footer-icon'/>
        <FaGoogle className='footer-icon' />
        <FaGithub className='footer-icon' />
    </div>
    <div>
      <div className='footer-text-container'>
        <p className='footer-text'>No Copyright &copy; All right use</p>
      </div>
    </div>
    </div>
  )
}

export default Footer