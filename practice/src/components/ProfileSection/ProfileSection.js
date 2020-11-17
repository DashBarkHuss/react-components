import React from 'react';
import './ProfileSection.css';
import CoverImage from './CoverImage/CoverImage.js';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import EditableProfileInfo from './EditbableProfileInfo/EditableProfileInfo.js';
import EditableCoverImage from './EditableCoverImage/EditableCoverImage';
import Button from '@material-ui/core/Button';
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
      <EditableProfileInfo
        firstName={props.firstName}
        displayName={props.displayName}
        profileMessage={props.profileMessage}
        profilePic={props.profilePic}
      ></EditableProfileInfo>
      <EditableCoverImage coverPicUrl={props.coverPicUrl}></EditableCoverImage>

      {/* <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage> */}
      <div style={{ width: '100%' }}>
        <div className="edit_profile_button__container">
          <Button style={{ zIndex: 100 }} variant="outlined">
            hi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
