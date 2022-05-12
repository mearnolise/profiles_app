import { useState, useContext, useEffect } from "react";
import "./css/form.css";

import FormList from "./FormList";
import FormContext from "../../../context/form/Formcontext";


function Form() {
  const { DataEdit,upDateData} = useContext(FormContext);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(DataEdit.edit);
    if (DataEdit.edit === true) {
      setBtnDisabled(false);
      setText(DataEdit.item.item.text);
    }
  }, [DataEdit]);

  const handleTextChange = (e) => {
    e.preventDefault()
    if (text !== "" && text.trim().length >= 10 && DataEdit.edit ===true) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault()

      const newData = {
        text,
    }
    if(DataEdit.edit === true && text.trim().length >= 10){
      upDateData(DataEdit.item.item.id, newData)
      setText('')
      setBtnDisabled(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <input
          type="text"
          onChange={handleTextChange}
          placeholder="write something"
          value={text}
          className="form-input-box"
        />
        <button className="button-form" type="submit" disabled={btnDisabled} >
          Send
        </button>
      </div>
     
      <FormList/>
    </form>
  );
}

export default Form;
