import './App.css';
import React, { useEffect, useState } from 'react';
import Profile from './components/Profile/Profile';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import ProfileSection from './components/ProfileSection/ProfileSection';
import coverPicUrl from './banner.png';
// import coverPicUrl from './banner_pic.png';
import profilePic from './profilePic.jpeg';
import EditableProfilePicture from './components/EditableProfilePicture/EditableProfilePicture';
import EditProfilePictureOverlay from './components/EditProfilePictureOverlay/EditProfilePictureOverlay';

// this would be in a session or something
const userId = '123';
const user = {
  coverPicUrl: coverPicUrl,
  profilePic: profilePic,
  displayName: 'Dashie Bark Huss',
  profileMessage: 'Love You',
  firstName: 'dashie',
};
function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: 'lightgrey' }}>
        <ProfileSection
          coverPicUrl={user.coverPicUrl}
          profilePic={user.profilePic}
          displayName={user.displayName}
          profileMessage={user.profileMessage}
          firstName={user.firstName}
        ></ProfileSection>
      </div>

      {/* <Profile userId={userId}></Profile> */}
    </div>
  );
}

export default App;
