import {createContext,useState,useEffect} from 'react'

const FormContext = createContext()

export const FormProvider = ({children}) => {

    const [Data,setData] = useState([])
    const [DataEdit,setDataEdit] = useState({
        item:{},
        edit: false,
    })

    
    useEffect(()=>{
        fetchData()
    },[])

    //set item to update
    const editData = (item) =>{
        setDataEdit({
            item,
            edit:true,
        })
    }

    //Fetch Data
    const fetchData = async() =>{
        const response = await fetch(`/formdata?_sort=id&_order=desc`)
        const data = await response.json()

        setData(data)
    }

    //update item
    const upDateData = async (id,updItem) =>{
        const response = await fetch(`/formdata/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(updItem)
    })
        const data = await response.json()
        setData(Data.map((item)=>item.id ===id ? {...item,...data} : item))
    }

    return <FormContext.Provider 
    value={{
        Data,
        DataEdit,
        editData,
        upDateData,
        
    }}>
        {children}
    </FormContext.Provider>

}
export default FormContext