import './App.css';
import React, { useEffect, useContext, useState } from 'react';
import AddWish from './components/AddWish/AddWish';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserContext } from './contexts/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyledDialog from './components/common/StyledDialog/StyledDialog';
import WishForm from './components/AddWish/WishForm/WishForm';
import UpdateProfileForm from './components/ProfileSection/UpdateProfileInfo/UpdateProfileForm/UpdateProfileForm';
import { TextField } from '@material-ui/core';
import ProductInputs from './components/AddWish/ProductInputs';
import { set } from 'mongoose';

const currentUser = () => {
  return fetch('http://localhost:4000/users/current').then((res) => {
    if (res.status === 204) return Promise.resolve(null);
    return res.json();
  });
};
export default function App() {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    currentUser().then((user) => {
      setUser(user);
    });
  }, []);
  const close = () => {
    setOpen(false);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <UserContext.Provider value={user}>
            {/* <WishForm></WishForm> */}
            {/* <UpdateProfileForm handle="sassy" wishlistName="Sassy's Gifts" /> */}
            <StyledDialog onClose={close} open={open}>
              <AddWish onClose={close}></AddWish>
            </StyledDialog>
          </UserContext.Provider>
        </div>
      </ThemeProvider>
    </Router>
  );
}
