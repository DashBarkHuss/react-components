import React from 'react';
import './EditableProfilePicture.css';
import '../ProfilePicture/ProfilePicture.js';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import InputProfilePic from '../InputProfilePic/InputProfilePic';
import ProfileInputOverlay from '../ProfileInputOverlay/ProfileInputOverlay';

/**
 * Renders a <EditableProfilePicture /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 **/
export default function EditableProfilePicture(props) {
  return (
    <div className="editable_profile_picture__container">
      <div className="update_profile_picture_button__container">
        <InputProfilePic
          handleUpdateProfilePicture={props.handleUpdateProfilePicture}
        ></InputProfilePic>
      </div>
      <ProfileInputOverlay></ProfileInputOverlay>
      <ProfilePicture profilePic={props.profilePic}></ProfilePicture>
    </div>
  );
}
