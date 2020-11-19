import React, { useState } from 'react';
import './ProfileSection.css';
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
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [wishlistName, setWishlistName] = useState(null);
  const [handle, setHandle] = useState(null);
  const [message, setMessage] = useState(null);

  // fetch post image
  const fetchPostImage = (image, fileName, route) => {
    var fd = new FormData();
    fd.append(fileName, image);
    return fetch(route, {
      method: 'POST',
      body: fd,
      mode: 'cors',
    });
  };
  // fetch post json
  const fetchPostJson = () => {};

  // route post /alias/update
  // profilePicture
  // handle

  const handleUpdateProfilePicture = (image) => {
    //does this return a promise?
    fetchPostImage(image, 'image', 'http://localhost:4000/image')
      .then(async (response) => {
        if (response.status === 500) {
          let responseText = await response.text();
          throw new Error(responseText);
        }
        return response.text();
      })
      .then((img) => {
        setProfilePicture(image);
        console.log(img);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  const handleCheckHandleAvailability = () => {};
  const handleUpdateHandle = () => {};

  // route post /wishlist update
  // coverImage
  // message
  // wishlistName
  const handleUpdateCoverImage = () => {};
  const handleUpdateMessage = () => {};
  const handleUpdateWishlistName = () => {};

  return (
    <div className="profile_section">
      <EditableCoverImage coverPicUrl={props.coverPicUrl}></EditableCoverImage>
      <EditableProfileInfo
        firstName={props.firstName}
        displayName={props.displayName}
        profileMessage={props.profileMessage}
        profilePic={props.profilePic}
        handleUpdateProfilePicture={handleUpdateProfilePicture}
      ></EditableProfileInfo>

      {/* <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage> */}
      <div className="edit_profile_button__container">
        <Button color="primary" variant="outlined">
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

export default ProfileSection;
