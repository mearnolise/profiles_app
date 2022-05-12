import {useContext} from 'react'
import FormItem from "./FormItem"
import FormContext from '../../../context/form/Formcontext';
import "./css/form.css"

function FormList() {
  const {Data} = useContext(FormContext);

  return (
    
    <div className='text-box-container'>
        {Data.map((items)=>(
            <FormItem key={items.id} item={items} />
        ))}
    </div>
  )
}

export default FormList
