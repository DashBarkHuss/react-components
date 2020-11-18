import React from 'react';
import './EditableProfilePicture.css';
import '../ProfilePicture/ProfilePicture.js';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
export default function EditableProfilePicture(props) {
  return (
    <div className="editable_profile_picture__container">
      <div className="update_profile_picture_button__container">
        <StyledIconButton size="small" ariaLabel="update profile picture">
          <PhotoCameraIcon></PhotoCameraIcon>
        </StyledIconButton>
      </div>
      <ProfilePicture profilePic={props.profilePic}></ProfilePicture>
    </div>
  );
}
