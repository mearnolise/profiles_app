import {useContext} from 'react'
import HomeContext from '../Home/HomeContext';

function Home() {
  
  const {style1,style2,style3,style4,changeStyle} = useContext(HomeContext)
  
    return (
      <div className="main-body-container">
        <div className={style1} onClick={()=>changeStyle(style1,"Style1")}>dd</div>
        <div className={style2} onClick={()=>changeStyle(style2,"Style2")}>dd</div>
        <div className={style3} onClick={()=>changeStyle(style3,"Style3")}>dd</div>
        <div className={style4} onClick={()=>changeStyle(style4,"Style4")}>dd</div>
      </div>
    )
  }
  
  export default Home
  