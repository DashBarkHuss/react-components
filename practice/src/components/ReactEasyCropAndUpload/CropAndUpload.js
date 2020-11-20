import React, { useState, useEffect } from 'react';
import defaultImg from './wedding_dress_dashie.jpg';
import './CropAndUpload.css';
import EasyCrop from '../ReactEasyCrop/EasyCrop';
import CloseButton from '../CloseButton/CloseButton';
import { getCroppedImg } from '../ReactEasyCrop/utils';

/* Renders a <CropAndUpload /> component
 * @param  props
 * @param  props.handleUpdateProfilePicture
 * @param  props.aspect ex 2 or 2/1
 * @param  props.cropShape
 **/
export default function CropAndUpload(props) {
  const [crop, setCrop] = useState(null);

  const onCropComplete = (cropInfo) => {
    setCrop(cropInfo);
  };

  const croppedImage = async () => {
    const image = await getCroppedImg(props.imgSrc, crop.croppedAreaPixels);
    return image;
  };
  const postImage = async (image) => {
    var fd = new FormData();
    fd.append('image', image);
    fetch('http://localhost:4000/image', {
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
        props.onSuccess(image);
        console.log(img);
      })
      .catch(console.log);
  };
  async function onCropAndSave(e) {
    e.preventDefault();
    const image = await croppedImage();
    postImage(image);
    props.onClose();
  }

  const handleCrop = (info) => {
    setCrop(info);
  };

  return (
    <form className="crop-and-upload-container">
      <CloseButton onClose={props.onClose}></CloseButton>
      <p className="crop-label">Profile Picture</p>
      <EasyCrop
        aspect={props.aspect}
        cropShape={props.cropShape}
        imgSrc={props.imgSrc || defaultImg}
        onCropComplete={onCropComplete}
        handleCrop={handleCrop}
      ></EasyCrop>
      <button onClick={onCropAndSave}>Crop and Save</button>
    </form>
  );
}
