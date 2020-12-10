import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import { Button, FormGroup, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChooseImage from '../ChooseImage';
import ProductInputs from '../ProductInputs';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // textAlign: 'center',
      display: 'grid',
      gap: '1em',
      //   alignItems: 'center',
    },
    button: {
      fontWeight: 900,
      color: 'white',
      borderRadius: 0,
      [theme.breakpoints.down(450)]: {
        position: 'fixed',
        left: '0',
        bottom: 0,
        width: '100%',
        zIndex: 10,
      },
    },
  };
});

export default function WishForm(props) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    //send data to backend post wish item
    props.onClose();
  };
  return (
    <form
      style={props.disabled ? { opacity: '.3', pointerEvents: 'none' } : {}}
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ChooseImage
      //   displayImages={filteredImages}
      />
      <Typography>Set Info</Typography>
      <div style={{ display: 'flex', gap: '1.6em' }}>
        <TextField
          style={{ flex: '3 1' }}
          variant="outlined"
          // value={name}
          label="Product Name"
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
        />

        <TextField
          style={{ flex: '1 1' }}
          variant="outlined"
          // value={'$' + (price || '')}
          value={'$'}
          label="Price"
          // onChange={(e) => {
          //   setPrice(e.target.value.slice(1));
          // }}
        />
      </div>
      <Button
        disableElevation="true"
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
      >
        + Add Wish
      </Button>
    </form>
  );
}
