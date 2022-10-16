
import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import AddEntryForm from '../AddEntry/AddEntryForm';


const EntriesChartTracker = (props) => {
    
    const [chartData, setChartData] = useState([])

    useEffect(()=> {
        let tempChartData = props.parentEntries.map((entry)=> {
            return [entry.date, entry.weight];
        })
        setChartData(tempChartData);
}, [props.parentEntries]) 
// useEffect has 2 properties one is an annynomous function and the other is when or how often it should run, default is to run cnostantly
    return (
//      {/* https://www.react-google-charts.com/examples/line-chart */}
        <Chart
  chartType="LineChart"
  data={[["Date", "Weight"], ...chartData]}
//         X axis   y axis    data points
  width="100%"
  height="400px"
  legendToggle
  options={{legend: {position: "bottom"}}}
/>
      );
}
 
export default EntriesChartTracker;