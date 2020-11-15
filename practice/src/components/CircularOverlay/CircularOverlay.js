import ProfilePicture from '../ProfilePicture/ProfilePicture';
import EditProfilePictureOverlay from '../EditProfilePictureOverlay/EditProfilePictureOverlay';
import './CircularOverlay.css';
import defaultAvatar from './default-avatar.png';
export default function CircularOverlay(props) {
  return (
    <div class="img" href="#">
      <EditProfilePictureOverlay></EditProfilePictureOverlay>
      {/* <img src={defaultAvatar} /> */}
      <ProfilePicture></ProfilePicture>
    </div>
  );
}
