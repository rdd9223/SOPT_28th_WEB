import React from "react";
import ResultCard from "./ResultCard";
import { IResultProps } from "../interfaces";

const Result = ({ userState }: IResultProps) => {
  const { status, data } = userState;
  switch (status) {
    case "pending":
      return <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>;
    case "resolved":
      return <ResultCard data={data} />;
    case "rejected":
      return <div style={{ color: "white", fontSize: "24px" }}>User Not Found</div>;
    case "idle":
    default:
      return <div></div>;
  }
};

export default Result;
