import React from "react";
import { IResultCardProps } from "../interfaces";

const ResultCard = ({ data }: IResultCardProps) => {
  return (
    <>
      <div className="result_card">ResultCard</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default ResultCard;
