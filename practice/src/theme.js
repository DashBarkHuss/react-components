import { createMuiTheme } from '@material-ui/core/styles';

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
  // spacing: { spacing: 4 },
});
theme.overrides = {
  MuiButton: {
    // root: { border: 'px solid red' },
  },
};

export default theme;
