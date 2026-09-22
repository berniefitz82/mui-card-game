
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CiMenuBurger } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { loggedInState } from './App';
import SignUpForm from './SignUpForm';

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  function toggleLogStatus() {
    setLoggedIn((loggedIn) => !loggedIn);
  } 

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CiMenuBurger />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Card Games
          </Typography>
          <SignUpForm />
          <Button onClick={toggleLogStatus} color="inherit">{loggedIn ? "Logout" : "Login"}</Button>		  
        </Toolbar>
      </AppBar>      
    </Box>
  );
}