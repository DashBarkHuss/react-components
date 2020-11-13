import React, { useState } from 'react';
import defaultImg from './wedding_dress_dashie.jpg';
import './CropAndUpload.css';
import EasyCrop from '../ReactEasyCrop/EasyCrop';
import CloseButton from './CloseButton/CloseButton';
import { getCroppedImg } from '../ReactEasyCrop/utils';

import { downloadBase64File } from '../DragAndCropAndUpload/utils';
import { blobToImage64 } from '../ReactEasyCrop/utils';

export default function CropAndUpload(props) {
  const [crop, setCrop] = useState(null);

  async function onCrop(img) {
    console.log('img', img);
    const image64File = await blobToImage64(img);
    // const ext = extractImageFileExtensionFromBase64(image64File);
    downloadBase64File(image64File, 'myfile');
  }
  async function onCrop2(img) {
    console.log('img', img);
    console.log(defaultImg, crop);
    const image = await getCroppedImg(defaultImg, crop);
    // const image64File = await blobToImage64(image);
    // const ext = extractImageFileExtensionFromBase64(image64File);
    // downloadBase64File(image64File, 'myfile');
  }

  const handleCrop = (info) => {
    setCrop(info);
    console.log('hsandled crop');
  };

  return (
    <form className="crop-and-upload-container">
      <CloseButton onClose={props.onClose}></CloseButton>
      <p className="crop-label">Profile Picture</p>
      <EasyCrop
        imgSrc={props.imgSrc || defaultImg}
        onCrop={onCrop}
        handleCrop={handleCrop}
      ></EasyCrop>
      <button onClick={onCrop2}>Crop2</button>
    </form>
  );
}
