import PropTypes from 'prop-types'
import "./css/form.css"
import {useContext} from 'react'
import {FaEdit} from 'react-icons/fa'
import FormContext from '../../../context/form/Formcontext'

function FormItem(data) {
  const {editData} = useContext(FormContext);


  return (
    <div className='card'>
        <button onClick={()=> editData(data)} className="edit">
            <FaEdit color='purple'></FaEdit>
        </button>
        <div>{data.item.text}</div>
    </div>
  )
}

FormItem.propTypes ={
    item : PropTypes.object.isRequired,
    
}

export default FormItem