import './ProfilePicture.css';
import defaultAvatar from './default-avatar.png';
export default function ProfilePicture(props) {
  return (
    <div className="profile_picture">
      <img
        src={props.profilePic || defaultAvatar}
        className="profile_picture picture"
        alt="profile"
      />
    </div>
  );
}
