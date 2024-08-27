import React from 'react';
import Motion from './pages/Motion';
import Internet from './pages/Internet';
import Latency from './pages/Latency';
import Battery from './pages/Battery';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0', // Set your desired background color here
    },
  },
});

function App() {
  return (
 
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Full-width Motion component */}
      <Box>
        <Motion />
      </Box>

      {/* Internet and Latency components in one row divided into two columns */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        <Box flex={1}>
          <Internet />
        </Box>
        <Box flex={1}>
          <Latency />
        </Box>
      </Box>

      {/* Full-width Battery component */}
      <Box>
        <Battery />
      </Box>
    </Box>
  </ThemeProvider>
  
  );
}

export default App;
