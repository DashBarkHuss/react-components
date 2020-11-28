import './App.css';
import React, { useEffect, useContext, useState } from 'react';
import ProfileSection from './components/ProfileSection/ProfileSection';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserContext } from './contexts/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const currentUser = () => {
  return fetch('http://localhost:4000/users/current').then((res) => {
    if (res.status === 204) return Promise.resolve(null);
    return res.json();
  });
};
export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    currentUser().then((user) => {
      setUser(user);
    });
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <UserContext.Provider value={user}>
            <Switch>
              <Route path="/:alias">
                <ProfileSection></ProfileSection>
              </Route>
            </Switch>
          </UserContext.Provider>
        </div>
      </ThemeProvider>
    </Router>
  );
}
