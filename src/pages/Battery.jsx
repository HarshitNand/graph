import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Button, Container,Box,Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Battery = () => {

   const [selectedPeriod, setSelectedPeriod] = useState('3 Hours');

  const dataMap = {
    '3 Hours': {
      labels: ['0','20', '40', '1:20','1:40','2','2:20','2:40','3'],
      datasets: [
        {
          label: 'Last 3 Hours',
          data: [65, 59, 80,50,40,30,80,50,70],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    },
    '24 Hours': {
      labels: [
        '1 hour ago', '2 hours ago', '3 hours ago', '4 hours ago', 
        '5 hours ago', '6 hours ago', '7 hours ago', '8 hours ago',
        '9 hours ago', '10 hours ago', '11 hours ago', '12 hours ago',
        '13 hours ago', '14 hours ago', '15 hours ago', '16 hours ago',
        '17 hours ago', '18 hours ago', '19 hours ago', '20 hours ago',
        '21 hours ago', '22 hours ago', '23 hours ago', '24 hours ago'
      ],
      datasets: [
        {
          label: 'Last 24 Hours',
          data: [45, 56, 78, 67, 80, 95, 40, 60, 70, 90, 30, 50, 80, 85, 55, 65, 75, 80, 95, 100, 85, 70, 60, 50],
          fill: false,
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
        },
      ],
    },
    '7 Days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [
        {
          label: 'Last 7 Days',
          data: [30, 45, 60, 40, 55, 65, 70],
          fill: false,
          backgroundColor: 'rgba(54, 162, 235, 0.4)',
          borderColor: 'rgba(54, 162, 235, 1)',
        },
      ],
    },
    '30 Days': {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: 'Last 30 Days',
          data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
          fill: false,
          backgroundColor: 'rgba(153, 102, 255, 0.4)',
          borderColor: 'rgba(153, 102, 255, 1)',
        },
      ],
    },
  };

  const handleButtonClick = (period) => {
    setSelectedPeriod(period);
  };

  return (
   <Container maxWidth="md" style={{ marginTop: '5px', marginBottom: '50px' }}>
   <Typography variant="h6" align="center" gutterBottom>
   Battery Sensor Graph
   </Typography>
   <Box display="flex" justifyContent="center" mb={2}>
     <Button
       size="small"
       variant="contained"
       onClick={() => handleButtonClick('3 Hours')}
       style={{
         marginRight: '10px',
         backgroundColor: selectedPeriod === '3 Hours' ? 'blue' : 'black',
         color: 'white',
       }}
     >
       Last 3 Hours
     </Button>
     <Button
       size="small"
       variant="contained"
       onClick={() => handleButtonClick('24 Hours')}
       style={{
         marginRight: '10px',
         backgroundColor: selectedPeriod === '24 Hours' ? 'blue' : 'black',
         color: 'white',
       }}
     >
       24 Hours
     </Button>
     <Button
       size="small"
       variant="contained"
       onClick={() => handleButtonClick('7 Days')}
       style={{
         marginRight: '10px',
         backgroundColor: selectedPeriod === '7 Days' ? 'blue' : 'black',
         color: 'white',
       }}
     >
       7 Days
     </Button>
     <Button
       size="small"
       variant="contained"
       onClick={() => handleButtonClick('30 Days')}
       style={{
         backgroundColor: selectedPeriod === '30 Days' ? 'blue' : 'black',
         color: 'white',
       }}
     >
       30 Days
     </Button>
   </Box>
   <Box>
     <Line data={dataMap[selectedPeriod]} options={{ maintainAspectRatio: false }} width={600} height={400} />
   </Box>
 </Container>
  )
}

export default Battery
