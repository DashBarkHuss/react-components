import React from 'react';
import './EditableProfilePicture.css';
import defaultAvatar from './default-avatar.png';

export default function EditableProfilePicture(props) {
  return (
    <div className="editable_profile_picture__container">
      <div className="editable_profile_picture__overlay" onClick={props.onClick}>
        Update Profile Picture
      </div>

      <img
        src={props.profilePicUrl || defaultAvatar}
        className="editable_profile_picture picture"
        alt="profile"
      />
    </div>
  );
}
