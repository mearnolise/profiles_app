import "./css/block3.css"
import {useContext} from 'react'
import HomeContext from '../../context/Home/HomeContext'
import IconProfile from "./IconProfile";
import QrCode from "./QrCode";
import {FaBackspace} from 'react-icons/fa'


function Block3() {
    const {style3,qrcode,setqrcode} = useContext(HomeContext);
    if(style3==="big-block"){
        if(qrcode === false){
        return (
        <div className="body-block3">
            <div className="header-text-block3">
                <h1>Contact</h1>
                
            </div>
            <IconProfile/>
        </div>
        )}
        else{
        return (
            <div className="body-block3">
                <div className="header-text-block3">
                    <h1>Contact</h1>
                    <FaBackspace onClick={()=>setqrcode(false)} className="back-icon"/>
                </div>
                <QrCode />      
            </div>
        )
        }
        
    }else{
        return(
        <div className="small-block-body">
           <div className="vertical-writing">
            <h2>Contact</h2>
           </div>
        </div>       
    )}
}

export default Block3
