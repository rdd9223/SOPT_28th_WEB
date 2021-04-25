import React from "react";

const UserCard = ({ userInfo }) => {
  return (
    userInfo && (
      <>
        <h1>UserCard</h1>
        <p>{JSON.stringify(userInfo, null, 4)}</p>
        <p>{userInfo.name}</p>
        <p>{userInfo.bio}</p>
        <p>Following: {userInfo.following}</p>
        <p>Followers: {userInfo.followers}</p>
        <p>ID: {userInfo.id}</p>
      </>
    )
  );
};

export default UserCard;
