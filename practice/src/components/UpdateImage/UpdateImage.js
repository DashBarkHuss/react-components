import React, { useState } from 'react';
import StyledIconButton from '../StyledIconButton/StyledIconButton';
import StyledModal from './StyledModal/StyledModal';
import Crop from '../Crop/Crop';

/**
 * Renders a <UpdateImage /> component
 * @param  props
 * @param  props.handleUpdateImage
 * @param  props.aspect ex 2 or 2/1
 * @param  props.cropShape
 * @param  props.size
 * @param  props.children
 * @param  props.finalImageDimensions ex- {width: 300, height: 300}
 **/
export default function InputProfilePic(props) {
  const fileInput = React.useRef();
  const [newPictureSrc, setNewPictureSrc] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <label>
        {/* Button */}
        <input
          ref={fileInput}
          type="file"
          style={{ display: 'none' }}
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => {
            const image = e.target.files[0];
            if (image) {
              const imageURl = URL.createObjectURL(image);
              setNewPictureSrc(imageURl);
              setModalOpen(true);
              e.target.value = null;
            } else {
              setNewPictureSrc(null);
              e.target.value = null;
            }
          }}
        />
        <StyledIconButton
          onClick={() => fileInput.current.click()}
          size={props.size || 'small'}
          ariaLabel="update profile picture"
        >
          {props.children}
        </StyledIconButton>
      </label>
      {/* Button end*/}

      {/* Modal start */}
      <StyledModal open={modalOpen} ariaLabel="crop modal" onClose={handleModalClose}>
        <Crop
          onClose={handleModalClose}
          onCroppedImageCreated={props.handleUpdateImage}
          imgSrc={newPictureSrc}
          cropShape={props.cropShape}
          aspect={props.aspect}
          finalImageDimensions={props.finalImageDimensions}
        ></Crop>
      </StyledModal>
      {/* Modal end */}
    </>
  );
}
