import {FaMailBulk,FaFacebook,FaGithub,FaLine} from 'react-icons/fa'
import "./css/block3.css"
import {useContext} from 'react'
import HomeContext from '../../context/Home/HomeContext'




function IconProfile() {

  const {setqrcode} = useContext(HomeContext);

  return (
    <>
      <div className="body-text-block3">
        <div className="body-component-block">
          <div className="pic-block">
            <FaMailBulk className="icon-pic" />
          </div>
          <div className="text-block">smart03941@gmail.com</div>
        </div>

        <div className="body-component-block">
          <div className="pic-block">
            <a href="https://www.facebook.com/smart.natthaphat">
              <FaFacebook className="icon-pic" />
            </a>
          </div>
          <div className="text-block">Smart Natthaphat</div>
        </div>

        <div className="body-component-block">
          <div className="pic-block">
            <a href="https://github.com/mearnolise/profiles_app">
              <FaGithub className="icon-pic" />
            </a>
          </div>
          <div className="text-block">mearnolise</div>
        </div>

        <div className="body-component-block">
          <div className="pic-block">
            <FaLine className="icon-pic" onClick={()=>setqrcode(true)} />
          </div>
          <div className="text-block">ID:smartatp</div>
        </div>
      </div>
    </>
  );
}

export default IconProfile;
