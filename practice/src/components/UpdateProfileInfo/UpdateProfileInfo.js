import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import StyledModal from '../StyledModal/StyledModal';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import UpdateProfileForm from './UpdateProfileForm/UpdateProfileForm';

/**
 * Renders a <UpdateProfileInfo /> component
 * @param  props
 * @param  props.handleCheckHandleAvailability
 * @param  props.handleUpdateHandle
 */
export default function UpdateProfileInfo(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleModalOpen}
        color="primary"
        aria-label="update profile info"
        variant="outlined"
      >
        Edit Profile
      </Button>

      {/* Modal start */}
      <StyledModal open={modalOpen} ariaLabel="crop modal" onClose={handleModalClose}>
        <UpdateProfileForm
          handleCheckHandleAvailability={props.handleCheckHandleAvailability}
        ></UpdateProfileForm>
      </StyledModal>
      {/* Modal end */}
    </>
  );
}
