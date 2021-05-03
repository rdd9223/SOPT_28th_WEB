import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { getUserData } from "./lib/api";
import { IUserState } from "./interfaces";

const App = () => {
  const [userState, setUserState] = useState<IUserState>({
    // 처음에는 data만 저장했지만, status도 함께 저장합니다
    status: "idle",
    data: null,
  });

  const getUser = async (name: string) => {
    setUserState({ ...userState, status: "pending" });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error; // API 요청에 실패한 경우에는 data에 null이 반환됩니다
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
