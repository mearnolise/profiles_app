import {useContext} from 'react'
import HomeContext from '../Home/HomeContext';
import Block1 from '../../components/layout/Block1';
import Block2 from '../../components/layout/Block2';
import Block3 from '../../components/layout/Block3';
import Block4 from '../../components/layout/Block4';

function Home() {
  
  const {style1,style2,style3,style4,changeStyle} = useContext(HomeContext)
  
    return (

        <div className="main-body-container">
        
        <div className={style1} onClick={()=>changeStyle(style1,"Style1")}>
          <Block1/>
        </div>
        <div className={style2} onClick={()=>changeStyle(style2,"Style2")}>
          <Block2/>
        </div>
        <div className={style3} onClick={()=>changeStyle(style3,"Style3")}>
          <Block3/>
        </div>
        <div className={style4} onClick={()=>changeStyle(style4,"Style4")}>
          <Block4/>
        </div>
        </div>

      
    )
  }
  export default Home
  