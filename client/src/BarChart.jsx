import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
import { Bar }            from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement  
  )
const BarChart = ({total, newApp, rejectedApp, interviewApp}) => {
    console.log(total)
    return(
        <Bar
        className = "bar" 
        data= {{ 
            labels: ["total", "New", "Rejected", "Ongoing"],
            datasets:[
                {
                    label: "Applications Stats",
                    data: [total, newApp, rejectedApp, interviewApp],
                    backgroundColor: ['rgb(75, 192, 192, 0.2)','rgb(54, 162, 235, 0.2)','rgb(255, 99, 132, 0.2)','rgb(201, 203, 207, 0.2)'],
                    borderColor: ['rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(255, 99, 132)','rgb(201, 203, 207)'],
                    borderRadius: 3,
                    borderWidth:2
                }
            ]
        }}
       

     />
    )
    
}
export default BarChart