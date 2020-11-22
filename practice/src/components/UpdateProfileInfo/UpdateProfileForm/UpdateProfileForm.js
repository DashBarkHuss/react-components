import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

/**
 * Renders a <UpdateProfileForm /> component
 * @param  props
 * @param  props.handleCheckHandleAvailability
 **/
export default function UpdateProfileForm(props) {
  const { register, handleSubmit, errors } = useForm();

  const [handleErrMsg, setHandleErrMsg] = useState('');
  const [wishlistNameErrMsg, setWishlistNameErrMsg] = useState('');
  const [handle, setHandle] = useState(null);

  const handleChangeHandle = (e) => {
    setHandleErrMsg('');
    const handle = e.target.value.trim();
    setHandle(handle);
    if (!handle) return;
    if (handle.length >= 15) {
      setHandleErrMsg('handle must be less than 15 characters');
    }
    const regex = /^[0-9A-Za-z_-]+$/;
    if (!regex.test(handle)) {
      setHandleErrMsg(`Your username can only contain letters, numbers, '_', or '-'`);
    }
    setTimeout(async function () {
      if (handle === e.target.value.trim()) {
        console.log('here');
        const available = await props.handleCheckHandleAvailability(handle);
        if (!available) setHandleErrMsg('handle not available');
      }
    }, 1000);
  };
  const handleChangeWishlistName = (e) => {
    setWishlistNameErrMsg('');
    const wishlistName = e.target.value.trim();
    if (!wishlistName) return;
    if (wishlistName.length >= 22) {
      setWishlistNameErrMsg('Wishlist name must be less than 22 characters');
    }
  };
  return (
    <form autoComplete="off" action="http://localhost:4000/form" id="update-profile-form">
      <FormControl style={{ width: '15em' }} error={handleErrMsg} onChange={handleChangeHandle}>
        <InputLabel htmlFor="handle-input">handle</InputLabel>
        <Input
          name="handle"
          spellcheck="false"
          id="handle-input"
          aria-describedby="handle-helper-text"
        />
        <FormHelperText id="handle-helper-text">
          {handleErrMsg ||
            `www.wishtender.com/${
              handle || props.handle ? (handle || props.handle).toLowerCase() : 'handle'
            }`}
        </FormHelperText>
      </FormControl>
      <FormControl
        style={{ width: '15em' }}
        error={wishlistNameErrMsg}
        onChange={handleChangeWishlistName}
      >
        <InputLabel htmlFor="wishlist-name-input">Wishlist Name</InputLabel>
        <Input
          name="wishlistName"
          spellcheck="false"
          id="wishlist-name-input"
          aria-describedby="wishlist-name-helper-text"
        />
        <FormHelperText id="wishlist-name-helper-text">{wishlistNameErrMsg || ' '}</FormHelperText>
      </FormControl>
      <br></br>
      <Button
        disabled={handleErrMsg || wishlistNameErrMsg}
        type="submit"
        form="update-profile-form"
        value="Submit"
      >
        Submit
      </Button>
    </form>
  );
}
