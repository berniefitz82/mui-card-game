import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/system/ThemeProvider";
import {
  RecoilRoot,
  atom
} from 'recoil';
import LiveGamesTable from "./LiveGamesTable";
import NavBar from "./NavBar";
import PlayingCard from "./PlayingCard";
import theme from "./theme";

export const loggedInState = atom({
  key: 'loggedInState',
  default: false,
});

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <LiveGamesTable />
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10, gap: 2 }}>
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button>
          <PlayingCard suit={"Hearts"} value={"A"} />
        </Box>        
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
