import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import EditableProfilePicture from './components/EditableProfilePicture/EditableProfilePicture';
import './App.css';
import EasyCrop from './components/ReactEasyCrop/EasyCrop';
import ImgDropAndCrop from './components/DragAndCropAndUpload/ImgDropAndCrop';
import CropAndUpload from './components/ReactEasyCropAndUpload/CropAndUpload';
import React, { useEffect, useState } from 'react';
import { blobToImage64 } from './components/ReactEasyCrop/utils';

function App() {
  const [cropVisible, setCropVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgErrs, setImgErrs] = useState([]);
  const closeCrop = () => {
    setCropVisible(false);
  };
  useEffect(() => {
    if (imgSrc) setCropVisible(true);
  }, [imgSrc]);
  useEffect(() => {
    if (imgErrs.length) {
      alert(...imgErrs);
      setImgErrs([]);
    }
  }, [imgErrs]);

  const verifyImage = (file) => {
    const errArr = [];
    const maxSizemb = 1;
    var filesizemb = file.size * 0.000001;
    if (filesizemb > maxSizemb) errArr.push(`File size must be less than ${maxSizemb}mb.`);
    setImgErrs([...errArr]);
    return errArr.length ? false : true;
  };
  const uploadProfilePic = (e) => {
    const file = e.target.files[0];
    if (verifyImage(file)) blobToImage64(file).then((image64) => setImgSrc(image64));
  };

  return (
    <div className="App">
      <div style={{ width: '15%' }}>
        <label>
          <input
            type="file"
            style={{ display: 'none' }}
            accept="image/x-png,image/gif,image/jpeg"
            onChange={uploadProfilePic}
          />
          <EditableProfilePicture></EditableProfilePicture>
        </label>
      </div>
      {cropVisible && (
        <div style={{ margin: '10%' }}>
          <div>
            {' '}
            <CropAndUpload onClose={closeCrop} imgSrc={imgSrc}></CropAndUpload>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
