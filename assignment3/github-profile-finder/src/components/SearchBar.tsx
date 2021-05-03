import React, { useState } from "react";
import { ISearchBarProps } from "../interfaces";
import Styled from "styled-components";

const SearchBar = ({ getUser }: ISearchBarProps) => {
  const [userName, setUserName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUser(userName);
    setUserName("");
  };

  return (
    <SearchBarWrap>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="GitHub ID를 입력하세요" onChange={handleChange} value={userName} />
      </form>
    </SearchBarWrap>
  );
};

const SearchBarWrap = Styled.div`
  input {
    width: 300px;
    background-color:#28223f;
    border: 2px solid skyblue;
    color: white;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }
  input::placeholder {
    color: white;
  }
  input:focus {
    outline: none;
  }
`;

export default SearchBar;
