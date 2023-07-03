import LiveGamesTable from "./LiveGamesTable";
import NavBar from "./NavBar";
import ThemeProvider from "@mui/system/ThemeProvider";
import theme from "./theme";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import PlayingCard from "./PlayingCard";

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
        </Box>        
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
