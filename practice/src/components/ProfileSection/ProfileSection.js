import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import EditableProfileInfo from './EditbableProfileInfo/EditableProfileInfo.js';
import EditableCoverImage from './EditableCoverImage/EditableCoverImage';
import Button from '@material-ui/core/Button';
//fake data for now
import coverPicUrl from './banner_pic.jpg';
import profilePic from './profilePic.jpeg';

//change these to match your backend routes
const postImageRoute = 'http://localhost:4000/image';

//fake data for now
const user = {
  coverPicUrl: coverPicUrl,
  profilePic: profilePic,
  displayName: '@dashie',
  // find out limit
  profileMessage: 'Thanks for coming to my page!',
  firstName: 'Dashie',
};
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

  useEffect(() => {
    // all of these would be set through a get request in real life using fetch
    setProfilePicture(user.profilePic);
    setCoverImage(user.coverPicUrl);
    setWishlistName(user.firstName);
    setHandle(user.displayName);
    setMessage(user.profileMessage);
  }, []);

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
    fetchPostImage(image, 'image', postImageRoute)
      .then(async (response) => {
        if (response.status === 500) {
          let responseText = await response.text();
          throw new Error(responseText);
        }
        return response.text();
      })
      .then((img) => {
        setProfilePicture(URL.createObjectURL(image));
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
      <EditableCoverImage coverPicUrl={coverImage}></EditableCoverImage>
      <EditableProfileInfo
        firstName={wishlistName}
        displayName={handle}
        profileMessage={message}
        profilePic={profilePicture}
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
