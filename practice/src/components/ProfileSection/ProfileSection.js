import React from 'react';
import './ProfileSection.css';
import CoverImage from './CoverImage/CoverImage.js';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import EditableProfileInfo from './ProfileInfo/EditableProfileInfo';

/**
 * Renders a <ProfileSection /> component
 * @param  props
 * @param  props.coverPicUrl
 * @param  props.firstName
 * @param  props.displayName
 * @param  props.profilePic
 * @param  props.profileMessage
 */
function ProfileSection(props) {
  return (
    <div className="profile_section">
      <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage>
      <EditableProfileInfo
        firstName={props.firstName}
        displayName={props.displayName}
        profileMessage={props.profileMessage}
        profilePic={props.profilePic}
      ></EditableProfileInfo>
    </div>
  );
}

export default ProfileSection;
