import React, { useState, useEffect } from 'react';
import EditableProfilePicture from '../EditableProfilePicture/EditableProfilePicture';
import { blobToImage64 } from '../ReactEasyCrop/utils';

export default function InputProfilePicture(props) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (imgSrc) props.onUploaded(imgSrc);
  }, [imgSrc, props]);
  const uploadProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) blobToImage64(file).then((image64) => setImgSrc(image64));
  };
  return (
    <label>
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/x-png,image/gif,image/jpeg"
        onChange={uploadProfilePic}
      />
      <EditableProfilePicture></EditableProfilePicture>
    </label>
  );
}
