import React from "react";

const SearchBar = ({ setName }) => {
  const handleSettingName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={handleSettingName} />
    </form>
  );
};

export default SearchBar;
