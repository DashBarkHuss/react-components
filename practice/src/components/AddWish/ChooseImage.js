import React, { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import './ProductImages.css';
import { Button, Typography } from '@material-ui/core';

function ChooseImage(props) {
  let [displayImage, setDisplayImage] = useState(null);

  useEffect(() => {
    setDisplayImage(0);
  }, [props]);

  function move(num) {
    let newDisplayImage = displayImage + num;
    if (newDisplayImage > props.images.length - 1 || newDisplayImage < 0) {
      newDisplayImage = Math.abs(newDisplayImage + num * -props.images.length - (num == 1 ? 1 : 0));
    }
    setDisplayImage(newDisplayImage);
  }

  return (
    <div style={{ display: 'inherit', gap: 'inherit' }}>
      <Typography>Choose Image</Typography>
      <div
        className="square"
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: `url(${props.images && props.images[displayImage]})`,
          backgroundSize: 'cover',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          border: '1px solid grey',
        }}
      >
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            bottom: '2%',
            width: '100%',
            background: '#ffffff80',
          }}
        >
          <IconButton onClick={() => move(-1)}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton onClick={() => move(1)}>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChooseImage;
