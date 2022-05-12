import "./css/block4.css"
import {useContext} from 'react'
import HomeContext from '../../context/Home/HomeContext'
import Form from "./comment/Form";



function Block4() {
    const {style4} = useContext(HomeContext);
    if(style4==="big-block"){
        return (<div className="body-block4">
            <h1 className="header-text-block4"> Write somethings</h1>
            <Form />
            </div>
        )
        }else{
            return(
            <div className="small-block-body">
               <div className="vertical-writing">
                <h2>Comment</h2>
               </div>
            </div>       
        )}
}

export default Block4