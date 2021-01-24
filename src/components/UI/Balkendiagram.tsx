import * as React from 'react';
import { Bar } from 'react-chartjs-2';

interface BalkendiagramProps {
  Zwischensumme: number;
  Nebenkostenvorrauszahlung: number;
  Differenz: number
}
const  Balkendiagram: React.FC<BalkendiagramProps> = ({...props}) => {
    
    let data = {
      labels: ['Zwischensumme der Kosten', 'Differenz'],  
      datasets: [{
         label: 'gemsamte kosten',
         data: [props.Zwischensumme.toFixed(3), 0],
         backgroundColor: '#22aa99'
      }, {
         label: 'Nebenkostenvorrauszahlung',
         data:  [0, props.Nebenkostenvorrauszahlung.toFixed(3)],
         backgroundColor:  'rgba(153, 102, 255, 1)', 
      }, {
         label: props.Differenz < 0 ?  'Rückzahlung': "Nachzahlung",
         data: [0, props.Differenz.toFixed(3)],
         backgroundColor: props.Differenz < 0 ? '#66aa00' : '#b82e2e'
      }  ]
   }
 
    return (
        <Bar  
         data = {data} 
          options={
            {legend: {display: false},
               scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            } 
          }
          }
        />
    
    );
   
}
 
export default Balkendiagram;