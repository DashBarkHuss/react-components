import React, { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import './ProductImages.css';
import { Button, Typography } from '@material-ui/core';

function ChooseImage(props) {
  let [displayImage, setDisplayImage] = useState(null);
  const [loadedClassName, setLoadedClassName] = useState('not_loaded');

  useEffect(() => {
    setDisplayImage(0);
    if (props.displayImages && props.displayImages.length > 0) setLoadedClassName('loaded');
  }, [props]);

  function move(num) {
    let newDisplayImage = displayImage + num;
    if (newDisplayImage > props.displayImages.length - 1 || newDisplayImage < 0) {
      newDisplayImage = Math.abs(
        newDisplayImage + num * -props.displayImages.length - (num == 1 ? 1 : 0)
      );
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
          background: `url('https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/shop/resources/images/index/FW20_Refresh3_CasualCrossover.jpg')`,
          backgroundSize: 'cover',
          backgroundPrositionY: 'center',
          backgroundPositionX: 'center',
          border: '1px solid grey',
        }}
      >
        {/* <img src={props.displayImages ? props.displayImages[displayImage] : null} /> */}
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
