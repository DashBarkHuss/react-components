import React, { useState } from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
import CropModal from './CropModal/CropModal';

/**
 * Renders a <InputProfilePic /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 **/
export default function InputProfilePic(props) {
  const fileInput = React.useRef();
  const [newPictureSrc, setNewPictureSrc] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <label>
      <div>
        <input
          ref={fileInput}
          type="file"
          style={{ display: 'none' }}
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => {
            const image = e.target.files[0];
            if (image) {
              const imageURl = URL.createObjectURL(image);
              setNewPictureSrc(imageURl);
              setModalOpen(true);
              e.target.value = null;
            } else {
              setNewPictureSrc(null);
              e.target.value = null;
            }
          }}
        />
        <StyledIconButton
          onClick={() => fileInput.current.click()}
          size="small"
          ariaLabel="update profile picture"
        >
          <PhotoCameraIcon></PhotoCameraIcon>
        </StyledIconButton>
        <CropModal
          imgSrc={newPictureSrc}
          handleUpdateProfilePicture={props.handleUpdateProfilePicture}
          open={modalOpen}
          onClose={handleModalClose}
        ></CropModal>
      </div>
    </label>
  );
}
