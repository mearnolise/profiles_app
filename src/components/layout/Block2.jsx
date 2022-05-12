import {useContext} from 'react'
import HomeContext from '../../context/Home/HomeContext'
import './css/block2.css';


function Block2() {

  const {style2} = useContext(HomeContext);
    if(style2==="big-block"){
      return (
      <div className='body-block2'>
        <div className='school-container'>
          <div className='school-img-container'>
          <img src='https://www.pannomena.com/images/work/video_ku/ku_2.jpg' className='img-school' alt='school'></img>
          </div>
          <div className='school-text'>
            <h2>Kasetsart University</h2>
            <p>Department of computer engineering</p>
          </div>
        </div>
        <div className='school-container backside'>
          <div className='school-img-container'>
          <img src='http://karnlts.weebly.com/uploads/4/3/9/3/43933581/1582793_orig.jpg' className='img-school' alt='school'></img>
          </div>
          <div className='school-text text-backside'>
          <h2>Suankularb Wittayalai Nonthaburi</h2>
          <p>Science and Mathematics</p>
          </div>
        </div>
        
      </div>
      )
    }
    else{
      return(
      <div className="small-block-body">
         <div className="vertical-writing">
          <h2>Education</h2>
         </div>
      </div>       
  )}
  }
export default Block2
