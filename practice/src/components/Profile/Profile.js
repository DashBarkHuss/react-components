import EditableProfilePicture from '../EditableProfilePicture/EditableProfilePicture';
import CropAndUpload from '../ReactEasyCropAndUpload/CropAndUpload';
import React, { useEffect, useState } from 'react';
// this would be in a session or something

function Profile(props) {
  const [cropVisible, setCropVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  //fetch this
  const [profPicFileName, setProfilePicFileName] = useState(null);

  const closeCrop = () => {
    setCropVisible(false);
  };

  useEffect(() => {
    if (!profPicFileName) {
      //finish the users profile info

      fetch(`http://localhost:4000/user/${props.userId}`)
        .then((res) => {
          if (res.status === 500) throw res.text();
          return res.json();
        })
        .then((json) => {
          setProfilePicFileName(json.profilePicture);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  useEffect(() => {
    if (profPicFileName) {
      //fetch profile picture
      fetch(`http://localhost:4000/image/${profPicFileName}`)
        .then((res) => res.blob())
        .then((blob) => {
          setProfilePic(URL.createObjectURL(blob));
          console.log(blob);
        });
    }
  }, [profPicFileName]);
  const onUploadSuccess = (img) => {
    URL.createObjectURL(img);
    setProfilePic(URL.createObjectURL(img));
  };
  useEffect(() => {
    if (imgSrc) setCropVisible(true);
  }, [imgSrc]);

  // is this  called uploading?? we are just uploading to the client not the server
  const onUploaded = (img) => {
    setImgSrc(img);
  };

  return (
    <div className="App">
      <div style={{ width: '25%' }}>
        <EditableProfilePicture
          profilePic={profilePic}
          onUploaded={onUploaded}
        ></EditableProfilePicture>
      </div>
      {cropVisible && (
        <div style={{ margin: '10%' }}>
          <div>
            <CropAndUpload
              onSuccess={onUploadSuccess}
              onClose={closeCrop}
              imgSrc={imgSrc}
            ></CropAndUpload>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
