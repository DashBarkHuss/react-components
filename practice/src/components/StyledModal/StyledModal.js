import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const classes = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

/**
 * Renders a <StyledModal /> component
 * @param  props
 * @param  props.open
 * @param  props.onClose
 * @param  props.ariaLabel
 **/
export default function StyledModal(props) {
  return (
    <Modal
      open={props.open}
      style={{ display: 'flex' }}
      onClose={props.onClose}
      aria-label={props.ariaLabel || 'modal'}
    >
      <div
        style={{
          width: '400px',
          margin: 'auto',
          WebkitBoxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
          boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          background: 'white',
          textAlign: 'center',
        }}
      >
        <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
        {props.children}
      </div>
    </Modal>
  );
}
