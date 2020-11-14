import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import './App.css';
import EasyCrop from './components/ReactEasyCrop/EasyCrop';
import ImgDropAndCrop from './components/DragAndCropAndUpload/ImgDropAndCrop';
import CropAndUpload from './components/ReactEasyCropAndUpload/CropAndUpload';
import InputProfilePicture from './components/InputProfilePicture/InputProfilePicture.js';
import React, { useEffect, useState } from 'react';
import { blobToImage64 } from './components/ReactEasyCrop/utils';
import { replace } from 'sinon';

function App() {
  const [cropVisible, setCropVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const closeCrop = () => {
    setCropVisible(false);
  };
  useEffect(() => {
    if (!profilePic) {
      fetch(`http://localhost:4000/image/b493d5a8-975c-4a07-be0b-e3d4914dbaef.png`)
        .then((res) => res.blob())
        .then((blob) => {
          setProfilePic(URL.createObjectURL(blob));
          console.log(blob);
        });
    }
  });
  useEffect(() => {
    if (imgSrc) setCropVisible(true);
  }, [imgSrc]);

  const handleUploaded = (img) => {
    setImgSrc(img);
  };

  return (
    <div className="App">
      <div style={{ width: '15%' }}>
        <InputProfilePicture
          profilePic={profilePic}
          onUploaded={handleUploaded}
        ></InputProfilePicture>
      </div>
      {cropVisible && (
        <div style={{ margin: '10%' }}>
          <div>
            <CropAndUpload onClose={closeCrop} imgSrc={imgSrc}></CropAndUpload>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
