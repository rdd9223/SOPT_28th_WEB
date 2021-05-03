import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { getUserData } from "./lib/api";
import { IUserState } from "./interfaces";

const App = () => {
  const [userState, setUserState] = useState<IUserState>({
    status: "idle",
    data: null,
  });

  const getUser = async (name: string) => {
    setUserState({ ...userState, status: "pending" });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error;
      console.log(data);
      setUserState({ status: "resolved", data });
    } catch (e) {
      setUserState({ status: "rejected", data: null });
      console.log(e);
    }
  };

  return (
    <div>
      <SearchBar getUser={getUser} />
      <Result userState={userState} />
    </div>
  );
};

export default App;
