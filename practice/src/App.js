import './App.css';
import ProfileSection from './components/ProfileSection/ProfileSection';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ProfileSection></ProfileSection>
      </div>
    </ThemeProvider>
  );
}

export default App;
