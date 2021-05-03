import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { getUserData } from "./lib/api";
import { IUserState } from "./interfaces";
import Styled from "styled-components";

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
    <Wrapper>
      <SearchBar getUser={getUser} />
      <Result userState={userState} />
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff
`;

export default App;
