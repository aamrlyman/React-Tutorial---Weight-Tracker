import React, { useState } from 'react';


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
        <form onSubmit={handleSubmit}>
            <label>Weight</label>              
            {/* onChange is an attribute of useState variables, onChange calls the set weight function based on the event (any change to the weight input) event.target.value takes in the user input on webpage 
            The value attribute binds the input box to the weight state
            type= "numer" makes the weight input allow only numbers
            */}
            <input type = "Number" value={weight} onChange= {(event) => setWeight(parseFloat(event.target.value))}></input>
            <label>Date</label>
            <input type = "date" value={date}  onChange= {(event) => setDate(event.target.value)}></input>
            <button type = "submit">Add</button>

        </form>
      );
}
 
export default AddEntryForm;