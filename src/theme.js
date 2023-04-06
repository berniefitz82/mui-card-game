import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#386641',
    },
    secondary: {
      main: '#bc4749',
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {    
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)', // set striped rows
          },
          '&$selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)', // set highlighted rows
          },
        },
      },
    }
  },  
});

export default theme;