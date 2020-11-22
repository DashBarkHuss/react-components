import React, { useState, useEffect, useRef } from 'react';
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
  const { register, handleSubmit, errors, clearErrors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [wishlistNameErrMsg, setWishlistNameErrMsg] = useState('');
  const [handle, setHandle] = useState(null);
  const input = useRef(null);

  const validateHandle = async (handle) => {
    if (!handle) return;
    const available = await new Promise((resolve) => {
      setTimeout(async function () {
        if (handle === input.current.children[0].value) {
          const avail = await props.handleCheckHandleAvailability(handle);
          resolve(avail);
        }
      }, 1000);
    });
    return available || 'Opps';
  };
  const handleChangeWishlistName = (e) => {
    setWishlistNameErrMsg('');
    const wishlistName = e.target.value.trim();
    if (!wishlistName) return;
    if (wishlistName.length >= 22) {
      setWishlistNameErrMsg('Wishlist name must be less than 22 characters');
    }
  };
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      action="http://localhost:4000/form"
      id="update-profile-form"
    >
      <FormControl
        error={errors.handle && !(errors.handle.type === 'required') ? true : false}
        style={{ width: '15em' }}
      >
        <InputLabel htmlFor="handle-input">handle</InputLabel>
        <Input
          ref={input}
          name="handle"
          onChange={(e) => {
            setHandle(e.target.value);
            if (errors.handle !== undefined) {
              if (errors.handle.type === 'validate') {
                clearErrors(['handle']);
              }
            }
          }}
          inputRef={register({
            validate: async (value) => await validateHandle(value),
            required: 'handle required',
            maxLength: { value: 14, message: 'handle must be less than 15 characters' },
            pattern: {
              value: /^[0-9A-Za-z_-]+$/,
              message: `Your username can only contain letters, numbers, '_', or '-'`,
            },
          })}
          spellCheck="false"
          id="handle-input"
          aria-describedby="handle-helper-text"
        />
        <FormHelperText id="handle-helper-text">
          {errors.handle?.message ||
            `www.wishtender.com/${
              handle || props.handle ? (handle || props.handle).toLowerCase() : 'handle'
            }`}
        </FormHelperText>
      </FormControl>
      <FormControl
        style={{ width: '15em' }}
        // error={wishlistNameErrMsg}
        onChange={handleChangeWishlistName}
      >
        <InputLabel htmlFor="wishlist-name-input">Wishlist Name</InputLabel>
        <Input
          name="wishlistName"
          // inputRef={register}
          spellCheck="false"
          id="wishlist-name-input"
          aria-describedby="wishlist-name-helper-text"
        />
        <FormHelperText id="wishlist-name-helper-text">{wishlistNameErrMsg || ' '}</FormHelperText>
      </FormControl>
      <br></br>
      <Button type="submit" form="update-profile-form" value="Submit">
        Submit
      </Button>
    </form>
  );
}
