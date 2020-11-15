import React from 'react';
import './EditableProfilePicture.css';
import defaultAvatar from './default-avatar.png';
import '../ProfilePicture/ProfilePicture.js';
import BannerPicture from '../BannerPicture/BannerPicture';

export default function EditableBannerPicture(props) {
  return (
    <div className="editable_banner_picture__container">
      <div className="editable_banner_picture__overlay" onClick={props.onClick}>
        Update Profile Picture
      </div>
      <BannerPicture profilePic={props.profilePic}></BannerPicture>
    </div>
  );
}
