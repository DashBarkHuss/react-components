import React, { useState, useEffect, useContext } from 'react';
import './ProfileSection.css';
import EditableProfileInfo from './EditbableProfileInfo/EditableProfileInfo.js';
import EditableCoverImage from './EditableCoverImage/EditableCoverImage';
//fake data for now
import coverPicUrl from './banner_pic.jpg';
import profilePic from './profilePic.jpeg';
import UpdateProfileInfo from './UpdateProfileInfo/UpdateProfileInfo';
//change these to match your backend routes
import { UserContext } from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
const postImageRoute = 'http://localhost:4001/image';

/**
 * Renders a <ProfileSection /> component
 * @param  props
 */
function ProfileSection(props) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [wishlistName, setWishlistName] = useState(null);
  const [handle, setHandle] = useState(null);
  const [wishlistMessage, setWishlistMessage] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const currentUser = useContext(UserContext);
  let { alias: aliasPath } = useParams();

  useEffect(() => {
    const cb = (json) => {
      setCoverImage(`${json.wishlist.coverPicUrl}`);
      setProfilePicture(`${json.profilePicture}`);
      setWishlistName(json.wishlist.wishlistName);
      setHandle(json.handle);
      setWishlistMessage(json.wishlist.wishlistMessage);
      setIsAuth(currentUser ? currentUser.aliases.includes[json._id] : false);
    };
    fetchGet(`http://localhost:4001/aliases?handle=${aliasPath}`, cb);
  }, []);

  // fetch post image
  const fetchPostImage = (image, fileName, route, setStateCallback) => {
    var fd = new FormData();
    fd.append(fileName, image);
    fetch(route, {
      method: 'POST',
      body: fd,
      mode: 'cors',
    })
      .then(async (response) => {
        if (response.status === 500) {
          let responseText = await response.text();
          throw new Error(responseText);
        }
        return response.text();
      })
      .then((img) => {
        setStateCallback(URL.createObjectURL(image));
        console.log(img + 'posted to server');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  // fetch post json
  const fetchPostJson = async (data, route, setStateCallbacks) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    await fetch(route, {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('server response: ', response);
        setStateCallbacks();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  // fetch get json
  const fetchGet = async (route, cb) => {
    await fetch(route)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        cb(json);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  // fetch get image
  const fetchGetImage = async (route, cb) => {
    await fetch(route)
      .then((res) => res.blob())
      .then((blob) => {
        cb(URL.createObjectURL(blob));
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const handleUpdateProfilePicture = (image) => {
    fetchPostImage(image, 'image', postImageRoute, setProfilePicture);
  };
  const handleCheckHandleAvailability = async (handle) => {
    const available = await fetch(`http://localhost:4001/users?handle=${handle}`)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        return !(text === 'true');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
    return available;
  };
  const handleUpdateHandle = (handle) => {
    fetchPostJson({ handle }, 'http://localhost:4001/alias', () => {
      setHandle(handle);
    });
  };

  // route post /wishlist update
  // coverImage
  // message
  // wishlistName
  const handleUpdateCoverImage = (image) => {
    fetchPostImage(image, 'image', postImageRoute, setCoverImage);
  };
  const handleUpdateWishlistMessage = (wishlistMessage) => {
    fetchPostJson({ wishlistMessage }, 'http://localhost:4001/wishlist', () => {
      setWishlistMessage(wishlistMessage);
    });
  };

  const handleUpdateWishlistName = (wishlistName) => {
    fetchPostJson({ wishlistName }, 'http://localhost:4001/wishlist', () => {
      setWishlistName(wishlistName);
    });
  };

  return (
    <div className="profile_section">
      <EditableCoverImage
        coverPicUrl={coverImage}
        handleUpdateCoverImage={handleUpdateCoverImage}
        isAuth={isAuth}
      ></EditableCoverImage>

      <EditableProfileInfo
        wishlistName={wishlistName}
        handle={handle}
        wishlistMessage={wishlistMessage}
        profilePic={profilePicture}
        handleUpdateProfilePicture={handleUpdateProfilePicture}
        handleUpdateWishlistMessage={handleUpdateWishlistMessage}
        isAuth={isAuth}
      ></EditableProfileInfo>
      {isAuth && (
        <div className="edit_profile_button__container">
          <UpdateProfileInfo
            wishlistName={wishlistName}
            handleUpdateWishlistMessage={handleUpdateWishlistMessage}
            handle={handle}
            handleUpdateWishlistName={handleUpdateWishlistName}
            handleUpdateHandle={handleUpdateHandle}
            handleCheckHandleAvailability={handleCheckHandleAvailability}
            isAuth={isAuth}
          ></UpdateProfileInfo>
        </div>
      )}
    </div>
  );
}

export default ProfileSection;
