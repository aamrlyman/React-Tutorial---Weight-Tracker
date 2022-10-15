import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {
  const [entries, setEntries] = useState ([{Weight: 175, Date: "11-23-2021"}, 
                                           {Weight: 176, Date: "11-2-2021"}]) 
  return (
    <div className="App">
      {/* adding entries as a prop/peramter to the DisplayEntries function */}
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm/> 
    </div>
  );
}

export default App;
