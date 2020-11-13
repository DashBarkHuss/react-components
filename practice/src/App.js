import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import EditableProfilePicture from './components/EditableProfilePicture/EditableProfilePicture';
import './App.css';
import EasyCrop from './components/ReactEasyCrop/EasyCrop';
import ImgDropAndCrop from './components/DragAndCropAndUpload/ImgDropAndCrop';
import CropAndUpload from './components/ReactEasyCropAndUpload/CropAndUpload';
import React, { useState } from 'react';
function App() {
  const [cropVisible, setCropVisible] = useState(true);
  const closeCrop = () => {
    setCropVisible(false);
  };
  const myFunc = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      {/* <div style={{ width: '15%' }}>
        <EditableProfilePicture></EditableProfilePicture>
      </div> */}
      <div style={{ margin: '10%' }}>
        <div>{cropVisible && <CropAndUpload onClose={closeCrop}></CropAndUpload>}</div>
      </div>
      <input type="file" onChange={myFunc} />
      <div style={{ margin: '10%' }}>
        <div>
          <EasyCrop></EasyCrop>
        </div>
      </div>
      <div style={{ margin: '10%' }}>
        <div>
          <ImgDropAndCrop></ImgDropAndCrop>
        </div>
      </div>
    </div>
  );
}

export default App;
