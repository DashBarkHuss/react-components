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

  const bgColor = `linear-gradient(to left, ${color(primary).hue('-6').hex6()} 0%, ${color(primary)
    .hue('+6')
    .hex6()} 51%, ${color(primary).hue('-6').hex6()} 100%)`;
  const bgHoverColor = `linear-gradient(${color(primary).hue('+0').hex6()} 40%, ${color(primary)
    .hue('+0')
    .hex6()} 100%)`;
  return {
    root: {
      backgroundImage: bgColor,
      backgroundSize: `200% 100%`,
      transition: '0.01s',
      color: '#fff',
      '&:hover': {
        backgroundPosition: 'right center',
      },
    },
  };
});

function UpdateCoverPhotoButton() {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(classes.root)}
      ariaLabel="Update Cover Image"
      size="medium"
      color="primary"
    >
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
