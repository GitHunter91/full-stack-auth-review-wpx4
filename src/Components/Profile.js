import React from 'react';

const Profile = (props) => {
  console.log('-------------- props', props);
  return (
    <div>
      <img src={props.picture} alt={'User image of ' + props.name} />
      <h1>{props.name}</h1>
      <h6>Email: {props.email}</h6>
    </div>
  )
}

export default Profile;
