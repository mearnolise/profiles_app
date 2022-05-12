import {useContext} from 'react'
import HomeContext from '../../context/Home/HomeContext'
import './css/block1.css';
import Face from '../pic/face.png';
import Spinner from './Spinner';

function Block1() {

    const {style1} = useContext(HomeContext);
    if(style1==="big-block"){
    return (
        <div className='body-block1'>
            <div className='pic-container'>
            <img src={Face} className="face-pic" load={<Spinner/>} alt="profile-pic"/>
            </div>
            <div className='text-container'>
                <h1>NATTHAPHAT SRICHUNHAVANICH</h1>
                <p>Age: 23</p>
                <p>BirthDay: 10 March 1999</p>
                <p>Blood: O</p>
                <p>W/H: 179/76</p>
            </div>
        </div>
      )
        
    }else{
        return(
        <div className="small-block-body">
           <div className="vertical-writing">
            <h2>Basic Info</h2>
           </div>
        </div>       
    )}
}

export default Block1
