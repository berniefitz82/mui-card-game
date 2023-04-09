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
  spacing: 2,
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
