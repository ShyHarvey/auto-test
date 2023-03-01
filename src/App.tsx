
import { Stack } from "@mui/system"
import { ContactUs } from "./components/ContactUs"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '100vw' }}>
          <ContactUs />
        </Stack>
      </ThemeProvider>
    </div >
  )
}

export default App
