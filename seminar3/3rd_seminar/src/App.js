import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import { getUserData } from "./lib/api/githubAPI";

function App() {
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const fetchUserInfo = async (name) => {
    const data = await getUserData(name);
    setUserInfo(data);
  };

  useEffect(() => {
    fetchUserInfo(name);
  }, [name]);

  return (
    <>
      <SearchBar setName={setName} />
      <UserCard userInfo={userInfo} />
    </>
  );
}

export default App;
