import createTheme from '@mui/material/styles/createTheme';
import red from '@mui/material/colors/red';
import green from '@mui/material/colors/green';

const theme = createTheme({
  palette: {
    primary: {
      main: '#386641',
    },
    secondary: {
      main: '#bc4749',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 2,
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(56, 102, 65, 0.1)',
          },
        },
        striped: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(56, 198, 113, 0.1)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#386641',
          color: '#fff',
          borderColor: '#bc4749',
          '& .MuiTableCell-root': {
            borderColor: '#bc4749',
            color: '#fff',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '2px solid #bc4749',
        },
      },
    },
  },
});

export default theme;
