import React, { useState } from 'react';
import './Crop.css';
import EasyCrop from '../ReactEasyCrop/EasyCrop';
import CloseButton from '../CloseButton/CloseButton';
import { getCroppedImg } from '../ReactEasyCrop/utils';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

/**
 * Renders a <Crop /> component
 * @param  props
 * @param  props.imgSrc must be a data URl
 * @param  props.onCroppedImageCreated
 * @param  props.aspect ex 2 or 2/1
 * @param  props.cropShape
 * @param  props.finalImageDimension ex- {width: 300, height: 300}
 **/
export default function Crop(props) {
  const [crop, setCrop] = useState(null);

  const onCropComplete = (cropInfo) => {
    setCrop(cropInfo);
  };

  const croppedImage = async () => {
    const image = await getCroppedImg(
      props.imgSrc,
      crop.croppedAreaPixels,
      props.finalImageDimensions
    );
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
        cropShape={props.cropShape}
        aspect={props.aspect}
        finalImageDimensions={props.finalImageDimensions}
      ></EasyCrop>
      <Button variant="contained" color="primary" disableElevation onClick={onCropAndSave}>
        Crop and Save
      </Button>
    </form>
  );
}
