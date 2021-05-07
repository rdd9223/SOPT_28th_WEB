import React from "react";
import { IResultCardProps } from "../interfaces";

const ResultCard = ({ data }: IResultCardProps) => {
  return (
    <div>
      <img src={data?.avatar_url} alt="user" />
      <div>{data?.name}</div>
      <div>{data?.login}</div>
      <div>{data?.bio}</div>
      <a href={data?.html_url}>Visit GitHub</a>
      <div>
        <div>
          Followers
          <div>{data?.followers}</div>
        </div>
        <div>
          Following
          <div>{data?.following}</div>
        </div>
        <div>
          Repos
          <div>{data?.public_repos}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
