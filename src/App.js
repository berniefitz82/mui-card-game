import LiveGamesTable from "./LiveGamesTable";
import NavBar from "./NavBar";
import ThemeProvider from "@mui/system/ThemeProvider";
import theme from "./theme";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>     
    <CssBaseline /> 
      <NavBar />
      <LiveGamesTable />
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" variant="contained">Secondary</Button>
    </ThemeProvider>
  );
}

export default App;
