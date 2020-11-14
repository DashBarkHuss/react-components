import React from 'react';
import './EditableProfilePicture.css';
import defaultAvatar from './default-avatar.png';
import '../ProfilePicture/ProfilePicture.js';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

export default function EditableProfilePicture(props) {
  return (
    <div className="editable_profile_picture__container">
      <div className="editable_profile_picture__overlay" onClick={props.onClick}>
        Update Profile Picture
      </div>
      <ProfilePicture profilePic={props.profilePic}></ProfilePicture>
    </div>
  );
}
