import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {
  const [entries, setEntries] = useState ([{weight: 175, date: "10-15-2021"}, {weight: 176, date: "10-16-2021"}])
                                           
  function addNewEntry (entry){
    // ... is like object.assign. Take all the current values of entries and add whatever entry has in it
    //the only way to update a state variable in React is to use the setEntries function. Use a temporariy array and the ... to assign more values to the array
    let tempEntries = [...entries, entry]
    setEntries(tempEntries);
  }
  return (
    <div className="App">
      {/* adding entries as a prop/peramter to the DisplayEntries function */}
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntry={addNewEntry} />
      <EntriesChartTracker parentEntries={entries} />
       {/*Setting = to function reference not function call(). Reference is like a pointer that we are passing down  */}
    </div>
  );
}

export default App;
