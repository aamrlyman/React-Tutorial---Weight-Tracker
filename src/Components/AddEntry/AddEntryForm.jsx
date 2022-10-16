import React, { useState } from 'react';
import './AddEntryForm.css';

const AddEntryForm = (props) => {
                // setWeight is a function that we have to call to update the weight value
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        // The default behavior is to refresh page on submit because the type is submit
        let newEntry = {
            // creating an object with the useState weight and date variables
            weight: weight,
            date: date
        }
       console.log(newEntry);
        props.addNewEntry(newEntry);
    }

    return (
        // form has an onsubmit attribute that is in this case, calling the handleSubmit function
        // https://getbootstrap.com/docs/4.0/content/tables/
        <form onSubmit={handleSubmit} className='form-grid'>
            {/* https://getbootstrap.com/docs/4.0/components/forms/ */}
            <div className='form-group'>
                <label>Weight</label>              
                {/* onChange is an attribute of useState variables, onChange calls the set weight function based on the event (any change to the weight input) event.target.value takes in the user input on webpage 
                The value attribute binds the input box to the weight state
                type= "numer" makes the weight input allow only numbers
                */}
                <input type = "Number" className="form-control" value={weight} onChange= {(event) => setWeight(parseFloat(event.target.value))}></input>      
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type = "date" className="form-control" value={date}  onChange= {(event) => setDate(event.target.value)}></input>
            </div>
                <button type="submit" className="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
      );
}
 
export default AddEntryForm;