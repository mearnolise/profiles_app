import {createContext,useState} from 'react'

const HomeContext = createContext()

export const HomeProvider =({children}) =>{
    
  const [style1,setStyle1] = useState("big-block");
  const [style2,setStyle2] = useState("small-block");
  const [style3,setStyle3] = useState("small-block");
  const [style4,setStyle4] = useState("small-block");
  const [qrcode,setqrcode] = useState(false)

  const changeStyle = (style,num) =>{
      if(style !== "big-block"){
        if (num === "Style1"){
            setStyle1("big-block")
            setStyle2("small-block")
            setStyle3("small-block")
            setStyle4("small-block")
        }else if(num === "Style2"){
            setStyle1("small-block")
            setStyle2("big-block")
            setStyle3("small-block")
            setStyle4("small-block")
        }else if(num === "Style3"){
            setStyle1("small-block")
            setStyle2("small-block")
            setStyle3("big-block")
            setStyle4("small-block")
        }else if(num === "Style4"){
            setStyle1("small-block")
            setStyle2("small-block")
            setStyle3("small-block")
            setStyle4("big-block")
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
            setqrcode,
            qrcode,
        }}>
            {children}
        </HomeContext.Provider>
}

export default HomeContext