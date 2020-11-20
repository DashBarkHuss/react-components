import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Crop from '../../Crop/Crop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const classes = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

/**
 * Renders a <CropModal /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 * @param  props.newPicture must be a data URL to be passed to crop
 * @param  props.open
 * @param  props.onClose
 **/
export default function CropModal(props) {
  return (
    <Modal
      open={props.open}
      style={{ display: 'flex' }}
      onClose={props.onClose}
      aria-label="crop profile picture"
    >
      <div
        style={{
          width: '400px',
          margin: 'auto',
          WebkitBoxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
          boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          background: 'white',
          textAlign: 'center',
        }}
      >
        <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
        <Crop
          onClose={props.onClose}
          onCroppedImageCreated={props.handleUpdateProfilePicture}
          imgSrc={props.imgSrc}
        ></Crop>
      </div>
    </Modal>
  );
}
