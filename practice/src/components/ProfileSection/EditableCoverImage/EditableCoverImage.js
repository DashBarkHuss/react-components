import React from 'react';
import CoverImage from '../CoverImage/CoverImage';
import PhotoSizeSelectActual from '@material-ui/icons/PhotoSizeSelectActual';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import './EditableCoverImage.css';
import clsx from 'clsx';
import StyledIconButton from '../../StyledIconButton/StyledIconButton';
const color = require('sc-color');

export default function EditableCoverImage(props) {
  return (
    <div className="editable-cover-image">
      <CoverImage coverPicUrl={props.coverPicUrl}></CoverImage>
      <div className="edit-image-button__container">
        <StyledIconButton ariaLabel="Update Cover Image" size="medium">
          <PhotoSizeSelectActual />
        </StyledIconButton>
      </div>
    </div>
  );
}
