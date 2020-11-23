import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import StyledModal from '../StyledModal/StyledModal';
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
          handleUpdateHandle={props.handleUpdateHandle}
          handleUpdateWishlistName={props.handleUpdateWishlistName}
          onClose={handleModalClose}
          wishlistName={props.wishlistName}
          handle={props.handle}
        ></UpdateProfileForm>
      </StyledModal>
      {/* Modal end */}
    </>
  );
}
