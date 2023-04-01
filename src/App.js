import LiveGamesTable from "./LiveGamesTable";
import NavBar from "./NavBar";
import "./App.css";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Button from "@mui/material/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <LiveGamesTable />
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" variant="contained">Secondary</Button>
    </ThemeProvider>
  );
}

export default App;
