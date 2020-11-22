import './App.css';

import ProfileSection from './components/ProfileSection/ProfileSection';
import ReactHookForm from './components/ReackHookForm/ReactHookForm.js';

// import coverPicUrl from './banner.png';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// this would be in a session or something
const userId = '123';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Nunito', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#02bff2',
    },
    secondary: {
      main: '#aaa',
    },
  },
  shape: {
    borderRadius: 50,
  },
});
theme.overrides = {
  MuiButton: {
    root: {
      border: '5px solid red',
    },
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{ backgroundColor: '#fafafa' }}>
          {/* <ReactHookForm></ReactHookForm> */}
          <ProfileSection></ProfileSection>
        </div>
      </div>
      <div style={{ borderColor: 'red' }}></div>
    </ThemeProvider>
  );
}

export default App;
