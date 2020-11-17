import React from 'react';
import CoverImage from '../CoverImage/CoverImage';
import IconButton from '@material-ui/core/IconButton';
import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import './EditableCoverImage.css';
import clsx from 'clsx';
const color = require('sc-color');

const useStyles = makeStyles((theme) => {
  const primary = theme.palette.primary.main;

  const bgColor = `radial-gradient(${color(primary).hue('-10').hex6()} 40%, ${color(primary)
    .hue('+10')
    .hex6()} 100%)`;
  const bgHoverColor = `radial-gradient(${color(primary).hue('+0').hex6()} 40%, ${color(primary)
    .hue('+0')
    .hex6()} 100%)`;
  return {
    root: {
      backgroundImage: bgColor,
      color: '#fff',
      '&:hover': {
        backgroundImage: bgHoverColor,
      },
    },
  };
});

function UpdateCoverPhotoButton() {
  const classes = useStyles();

  return (
    <IconButton className={clsx(classes.root)} size="medium" color="primary">
      <PhotoSizeSelectActualTwoToneIcon />
    </IconButton>
  );
}

export default function EditableCoverImage(props) {
  return (
    <div className="editable-cover-image">
      <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage>
      <div className="edit-image-button__container">
        <UpdateCoverPhotoButton></UpdateCoverPhotoButton>
      </div>
    </div>
  );
}
