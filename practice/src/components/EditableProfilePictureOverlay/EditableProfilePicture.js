import React from 'react';
import './EditableProfilePicture.css';
import '../ProfilePicture/ProfilePicture.js';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import EditProfilePictureOverlay from '../EditProfilePictureOverlay/EditProfilePictureOverlay';
import ProfileInputOverlay from '../ProfileInputOverlay/ProfileInputOverlay';
import { Input } from '@material-ui/core';

export default function EditableProfilePicture(props) {
  return (
    <div className="editable_profile_picture__container">
      <ProfileInputOverlay
        profilePic={props.profilePic}
        onUploaded={props.onUploaded}
      ></ProfileInputOverlay>
      <ProfilePicture profilePic={props.profilePic}></ProfilePicture>
    </div>
  );
}
