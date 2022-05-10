import {createContext,useState} from 'react'

const HomeContext = createContext()

export const HomeProvider =({children}) =>{
    
  const [style1,setStyle1] = useState("main-body-block1");
  const [style2,setStyle2] = useState("main-body-block");
  const [style3,setStyle3] = useState("main-body-block");
  const [style4,setStyle4] = useState("main-body-block");

  const changeStyle = (style,num) =>{
      if(style !== "main-body-block1"){
        if (num === "Style1"){
            setStyle1("main-body-block1")
            setStyle2("main-body-block")
            setStyle3("main-body-block")
            setStyle4("main-body-block")
        }else if(num === "Style2"){
            setStyle1("main-body-block")
            setStyle2("main-body-block1")
            setStyle3("main-body-block")
            setStyle4("main-body-block")
        }else if(num === "Style3"){
            setStyle1("main-body-block")
            setStyle2("main-body-block")
            setStyle3("main-body-block1")
            setStyle4("main-body-block")
        }else if(num === "Style4"){
            setStyle1("main-body-block")
            setStyle2("main-body-block")
            setStyle3("main-body-block")
            setStyle4("main-body-block1")
        }
    
      }
  }



  return <HomeContext.Provider
        value={{
            style1,
            style2,
            style3,
            style4,
            changeStyle,
        }}>
            {children}
        </HomeContext.Provider>
}

export default HomeContext