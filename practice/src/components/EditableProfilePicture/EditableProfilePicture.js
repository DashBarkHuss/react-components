import React from 'react';
import './EditableProfilePicture.css';
import '../ProfilePicture/ProfilePicture.js';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
import ProfileInputOverlay from '../ProfileInputOverlay/ProfileInputOverlay';
import CropAndUpload from '../ReactEasyCropAndUpload/CropAndUpload';
import Modal from '@material-ui/core/Modal';

/**
 * Renders a <StyledIconButton /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 **/
export default function EditableProfilePicture(props) {
  const fileInput = React.useRef();

  return (
    <div className="editable_profile_picture__container">
      <div className="update_profile_picture_button__container">
        <label>
          <div>
            <input
              ref={fileInput}
              type="file"
              style={{ display: 'none' }}
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(e) => {
                const image = e.target.files[0];
                if (image) props.handleUpdateProfilePicture(image);
                // props.handleUpdateProfilePicture(image);
              }}
            />
            <StyledIconButton
              onClick={() => fileInput.current.click()}
              size="small"
              ariaLabel="update profile picture"
            >
              <PhotoCameraIcon></PhotoCameraIcon>
            </StyledIconButton>
            <Modal
              open={true}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div style={{ width: '400px', paddingTop: '100px', margin: 'auto' }}>
                <CropAndUpload></CropAndUpload>
              </div>
            </Modal>
          </div>
        </label>
      </div>

      <ProfileInputOverlay></ProfileInputOverlay>
      <ProfilePicture profilePic={props.profilePic}></ProfilePicture>
    </div>
  );
}
