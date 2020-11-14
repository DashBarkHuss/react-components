import React, { useState, useEffect } from 'react';
import defaultImg from './wedding_dress_dashie.jpg';
import './CropAndUpload.css';
import EasyCrop from '../ReactEasyCrop/EasyCrop';
import CloseButton from './CloseButton/CloseButton';
import { getCroppedImg } from '../ReactEasyCrop/utils';

import { downloadBase64File } from '../DragAndCropAndUpload/utils';
import { blobToImage64 } from '../ReactEasyCrop/utils';

export default function CropAndUpload(props) {
  const [crop, setCrop] = useState(null);

  const onCropComplete = (cropInfo) => {
    console.log(cropInfo);
    setCrop(cropInfo);
  };

  async function onCrop(e) {
    e.preventDefault();
    const image = await getCroppedImg(props.imgSrc || defaultImg, crop.croppedAreaPixels);
    const image64File = await blobToImage64(image);
    // const ext = extractImageFileExtensionFromBase64(image64File);
    downloadBase64File(image64File, 'myfile');
  }

  const handleCrop = (info) => {
    setCrop(info);
  };

  return (
    <form className="crop-and-upload-container">
      <CloseButton onClose={props.onClose}></CloseButton>
      <p className="crop-label">Profile Picture</p>
      <EasyCrop
        imgSrc={props.imgSrc || defaultImg}
        onCropComplete={onCropComplete}
        handleCrop={handleCrop}
      ></EasyCrop>
      <button onClick={onCrop}>Crop2</button>
    </form>
  );
}
