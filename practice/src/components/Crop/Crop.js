import React, { useState } from 'react';
import './Crop.css';
import EasyCrop from '../ReactEasyCrop/EasyCrop';
import CloseButton from '../CloseButton/CloseButton';
import { getCroppedImg } from '../ReactEasyCrop/utils';

/**
 * Renders a <Crop /> component
 * @param  props
 * @param  props.imgSrc must be a data URl
 * @param  props.onCroppedImageCreated
 **/
export default function Crop(props) {
  const [crop, setCrop] = useState(null);

  const onCropComplete = (cropInfo) => {
    setCrop(cropInfo);
  };

  const croppedImage = async () => {
    const image = await getCroppedImg(props.imgSrc, crop.croppedAreaPixels);
    return image;
  };

  async function onCropAndSave(e) {
    e.preventDefault();
    const image = await croppedImage();
    props.onCroppedImageCreated(image);
    props.onClose();
  }

  const handleCrop = (info) => {
    setCrop(info);
  };

  return (
    <form className="crop-and-upload-container">
      {/* <CloseButton onClose={props.onClose}></CloseButton> */}
      <p className="crop-label">Profile Picture</p>
      <EasyCrop
        imgSrc={props.imgSrc || ''}
        onCropComplete={onCropComplete}
        handleCrop={handleCrop}
      ></EasyCrop>
      <button onClick={onCropAndSave}>Crop and Save</button>
    </form>
  );
}
