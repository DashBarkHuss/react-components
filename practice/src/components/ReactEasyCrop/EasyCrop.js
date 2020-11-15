import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import './EasyCrop.css';

export default function EasyCrop(props) {
  const [crop, onCropChange] = useState({ x: 0, y: 0 });
  const [zoom, onZoomChange] = useState(1);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    if (props.onCropComplete) props.onCropComplete({ croppedArea, croppedAreaPixels });
  };

  return (
    <div className="crop-container">
      {/* You can set this button to close the window */}
      <div className="crop-preview">
        <Cropper
          image={props.imgSrc}
          crop={crop}
          zoom={zoom}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}
          cropShape={props.cropShape || 'round'}
          aspect={props.aspect || 1}
          showGrid={props.showGrid || false}
        />
      </div>
      <div className="crop-controls">
        <p>Zoom</p>
        <div className="slider-container">
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => onZoomChange(zoom)}
          />
        </div>
      </div>
    </div>
  );
}
