import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import './App.css';
import EasyCrop from './components/ReactEasyCrop/EasyCrop';
import ImgDropAndCrop from './components/DragAndCropAndUpload/ImgDropAndCrop';
import CropAndUpload from './components/ReactEasyCropAndUpload/CropAndUpload';
import InputProfilePicture from './components/InputProfilePicture/InputProfilePicture.js';
import React, { useEffect, useState } from 'react';
import { blobToImage64 } from './components/ReactEasyCrop/utils';

function App() {
  const [cropVisible, setCropVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const closeCrop = () => {
    setCropVisible(false);
  };
  useEffect(() => {
    if (imgSrc) setCropVisible(true);
  }, [imgSrc]);

  const handleUploaded = (img) => {
    setImgSrc(img);
  };

  return (
    <div className="App">
      <div style={{ width: '15%' }}>
        <InputProfilePicture onUploaded={handleUploaded}></InputProfilePicture>
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
