import React from 'react';
import classes from './Form.module.scss';
const Form = ({formData,setFormData,setShowForm,onDone}) => {
  return (
    <div className={classes.container}>
        <div className={classes.formContainer}>
                <button className={classes.closeButton} onClick={() => setShowForm(false)}>x</button>
                <div className={classes.inputContainer}>
                <label>Number of People <small>(non-zero positive integer)</small></label>
                <input type="number" value={formData.numberOfPeople} onChange={(e) => setFormData({...formData,numberOfPeople: e.target.value})} />
                </div>
                <div className={classes.inputContainer}>
                <label>Duration of stay in seconds <small>(positive number)</small></label>
                <input type="number" value={formData.duration} onChange={(e) => setFormData({...formData,duration: e.target.value})}/>
                </div>
                <div className={classes.inputContainer}>
                <label>Fuss message if evicted <small>(text)</small></label>
                <input type="text" value={formData.fussMessage} onChange={(e) => setFormData({...formData,fussMessage: e.target.value})} />
                </div>
                <button disabled={!formData.numberOfPeople && !formData.duration} className={classes.addButton} onClick={onDone}>Add</button>
        </div>
    </div>
  )
}

export default Form