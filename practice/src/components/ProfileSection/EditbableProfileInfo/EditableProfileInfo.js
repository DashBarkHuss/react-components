import React from 'react';
import './EditableProfileInfo.css';
import EditableProfilePicture from '../../EditableProfilePicture/EditableProfilePicture';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function EditIconButton(props) {
  return (
    <IconButton size="small" aria-label="edit">
      <EditIcon />
    </IconButton>
  );
}

//toggle this--- in real life this would be session
const userLoggedIn = true;

/**
 * Renders a <ProfileInfo /> component
 * @param  props
 * @param  props.firstName
 * @param  props.displayName
 * @param  props.profilePic
 * @param  props.profileMessage
 * @param  props.handleUpdateProfilePicture
 */
export default function EditableProfileInfo(props) {
  return (
    <div className="info">
      <div className="container flex">
        <div className="profile_picture__container">
          <EditableProfilePicture
            handleUpdateProfilePicture={props.handleUpdateProfilePicture}
            profilePic={props.profilePic}
          ></EditableProfilePicture>
        </div>
        <div className="container name">
          <div className="wishlist_name">{props.firstName}'s Wishlist</div>
          <div className="user_name">{props.displayName}</div>
        </div>
      </div>
      <div className="profile_message">
        {props.profileMessage}
        {userLoggedIn && <EditIconButton />}
      </div>
    </div>
  );
}
