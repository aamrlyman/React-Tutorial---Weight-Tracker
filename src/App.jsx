import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import React, { useState } from 'react';


function App() {
  const [entries, setEntries] = useState ([{Weight: 175, Date: "11-23-2021"}, 
                                           {Weight: 176, Date: "11-2-2021"}]) 
  return (
    <div className="App">
      <DisplayEntries parentEntries = {entries}/>
    </div>
  );
}

export default App;
