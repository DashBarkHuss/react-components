import React, { useState } from 'react';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
import StyledModal from '../StyledModal/StyledModal';
import Crop from '../Crop/Crop';
import UpdateImageButton from './UpdateImageButton';

/**
 * Renders a <UpdateImage /> component
 * @param  props
 * @param  props.handleUpdateImage
 * @param  props.aspect ex 2 or 2/1
 * @param  props.cropShape
 * @param  props.size
 * @param  props.children
 * @param  props.ariaLabel
 * @param  props.finalImageDimensions ex- {width: 300, height: 300}
 **/
export default function InputProfilePic(props) {
  const [newImageSrc, setNewImageSrc] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleNewImageSrc = (image) => {
    setNewImageSrc(image);
    setModalOpen(true);
  };

  return (
    <>
      <UpdateImageButton
        size={props.size}
        ariaLabel={props.ariaLabel}
        handleNewImageSrc={handleNewImageSrc}
      >
        {props.children}
      </UpdateImageButton>

      {/* Modal start */}
      <StyledModal open={modalOpen} ariaLabel="crop modal" onClose={handleModalClose}>
        <Crop
          onClose={handleModalClose}
          onCroppedImageCreated={props.handleUpdateImage}
          imgSrc={newImageSrc}
          cropShape={props.cropShape}
          aspect={props.aspect}
          finalImageDimensions={props.finalImageDimensions}
        ></Crop>
      </StyledModal>
      {/* Modal end */}
    </>
  );
}
