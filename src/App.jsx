import React, { useState } from 'react';


function App() {
  const [entries, setEntries] = useState ([{Weight: 175, Date: "11-23-2021"}]) 
  return (
    <div className="App">
    <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>175</td>
          <td>11-23-2021</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;