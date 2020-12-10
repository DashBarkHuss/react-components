import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChooseImage from '../ChooseImage';
import ProductInputs from '../ProductInputs';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'grid',
      gap: '1em',
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

/**
 * Renders a <WishForm /> component
 * @param  props
 * @param  props.info
 * @param  props.onClose
 * @param  props.disabled
 * @param  props.images
 **/
export default function WishForm(props) {
  const classes = useStyles();
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(props.info && props.info.title);
    setPrice(props.info && props.info.price);
  }, [props.info]);

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
      <ChooseImage images={props.images} />
      <Typography>Set Info</Typography>
      <div style={{ display: 'flex', gap: '1.6em' }}>
        <TextField
          style={{ flex: '2 1' }}
          variant="outlined"
          value={name}
          label="Product Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <FormControl style={{ flex: '1 1' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={price || ''}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <Tooltip title="Don't forget to add shipping">
          <TextField
            style={{ flex: '1 1' }}
            variant="outlined"
            value={'$' + (price || '')}
            label="Price"
            onChange={(e) => {
              setPrice(e.target.value.slice(1));
            }}
            helperText="Shipping"
          />
        </Tooltip>
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
