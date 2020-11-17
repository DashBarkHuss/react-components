import React from 'react';
import CoverImage from '../CoverImage/CoverImage';
import Button from '@material-ui/core/Button';
import PhotoSizeSelectActualTwoToneIcon from '@material-ui/icons/PhotoSizeSelectActualTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import './EditableCoverImage.css';

export default function EditableCoverImage(props) {
  return (
    <div className="editable-cover-image">
      <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage>
      {/* <div className="edit-image-button__container">
        <Button
          variant="outlined"
          size="small"
          color="primary"
          startIcon={<PhotoSizeSelectActualTwoToneIcon />}
        >
          Edit Cover
        </Button>
      </div> */}
    </div>
  );
}
