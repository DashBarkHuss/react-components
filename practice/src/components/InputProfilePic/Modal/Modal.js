import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

/**
 * Renders a <Modal /> component
 * @param  props
 * @param  props.open
 * @param  props.onClose
 **/
export default function StyledModal(props) {
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
        {props.children}
      </div>
    </Modal>
  );
}
