import React from 'react'
import { Doughnut } from "react-chartjs-2"

interface DoughnutChartProps {
    data: any;
    Betriebskosten?: any;
}
const  DoughnutChart: React.FC<DoughnutChartProps> = ( {...props}) => {
    
     let Summe: number = 0;
        let Kosten = []; 
        let Name = []
        props.Betriebskosten.forEach(Anteil => {
            switch(Anteil.Abrechnungsposition) {
                case "Heizkosten/Wasser":
                case  "Hausreinigung":
                case "Fahrstuhl":
                case "Strom": 
                case "Müllabfuhr": 
                case "Versicherung-Gebäude":
                case "Niederschlagswasser":
                const num = Anteil.Kosten_Anteil ;
                 Kosten.push(num);
                 Name.push(Anteil.Abrechnungsposition);
                  Summe += num; 
            }
        
        });
        let KostenKopy = []
        Kosten.map(el=> {
            let NewElement = el/Summe
            KostenKopy.push(NewElement)
        });
    const data = {
        labels: [...Name ],
        datasets: [
            {
                label: 'Betriebskosten',
                data: [...KostenKopy],
                backgroundColor: [ 
                    'rgba(153, 102, 255, 1)',
                    'rgba(189, 195, 199, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(41, 241, 195, 1)',
                    'rgba(255, 205, 86, 1)',
                    '#008891',
                
                ],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Kosten-Überblick'
        }
    }

    return (<>
         <Doughnut data={data}   options={options} />
    </>)
}

export default DoughnutChart
//    props.data[Name.indexOf( "Heizkosten/Wasser")] > 0 ? 'rgba(41, 241, 195, 1)':'rgba(255, 99, 132, 1)',