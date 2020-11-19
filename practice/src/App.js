import './App.css';

import ProfileSection from './components/ProfileSection/ProfileSection';
// import coverPicUrl from './banner.png';
import coverPicUrl from './banner_pic.png';
import profilePic from './profilePic.jpeg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// this would be in a session or something
const userId = '123';

const user = {
  coverPicUrl: coverPicUrl,
  profilePic: profilePic,
  displayName: '@dashie',
  // find out limit
  profileMessage: 'Thanks for coming to my page!',
  firstName: 'Dashie',
};
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
          <ProfileSection
            coverPicUrl={user.coverPicUrl}
            profilePic={user.profilePic}
            displayName={user.displayName}
            profileMessage={user.profileMessage}
            firstName={user.firstName}
          ></ProfileSection>
        </div>
      </div>
      <div style={{ borderColor: 'red' }}></div>
    </ThemeProvider>
  );
}

export default App;
