import React from "react";
import { IResultCardProps } from "../interfaces";

const ResultCard = ({ data }: IResultCardProps) => {
  return (
    <>
      <div>ResultCard</div>
      <div>
        <img src={data?.avatar_url} alt="user" />
        <div>{data?.name}</div>
      </div>
    </>
  );
};

export default ResultCard;
