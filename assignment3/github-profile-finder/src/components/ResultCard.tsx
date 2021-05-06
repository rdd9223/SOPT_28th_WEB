import React from "react";
import { IResultCardProps } from "../interfaces";

const ResultCard = ({ data }: IResultCardProps) => {
  return (
    <>
      <div className="result_card">ResultCard</div>
      <div>
        <img src={data?.avatar_url} alt="user" />
        <div>{data?.name}</div>
      </div>
    </>
  );
};

export default ResultCard;
