import React, { useState } from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
import StyledModal from './Modal/Modal';
import Crop from '../Crop/Crop';
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
 * Renders a <InputProfilePic /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 * @param  props.cropRatio obj
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
        <StyledModal open={modalOpen} onClose={handleModalClose}>
          <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
          <Crop
            onClose={handleModalClose}
            onCroppedImageCreated={props.handleUpdateProfilePicture}
            imgSrc={newPictureSrc}
          ></Crop>
        </StyledModal>
      </div>
    </label>
  );
}
