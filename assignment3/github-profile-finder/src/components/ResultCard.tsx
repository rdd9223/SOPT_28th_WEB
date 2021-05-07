import React from "react";
import styled from "styled-components";
import { IResultCardProps } from "../interfaces";

const ResultCard = ({ data }: IResultCardProps) => {
  return (
    <Wrapper>
      <Image src={data?.avatar_url} alt="user" />
      <h2>{data?.name}</h2>
      <p>{data?.login}</p>
      <br />
      <p>{data?.bio}</p>
      <br />
      <GithubButton href={data?.html_url}>Visit GitHub</GithubButton>
      <InfoContainer>
        <InfoBox>
          Followers
          <div>{data?.followers}</div>
        </InfoBox>
        <InfoBox>
          Following
          <div>{data?.following}</div>
        </InfoBox>
        <InfoBox>
          Repos
          <div>{data?.public_repos}</div>
        </InfoBox>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9e8e8;
  width: 390px;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 2px solid gray;
  padding: 5px;
  margin: 30px;
`;

const GithubButton = styled.a`
  text-decoration: none;
  color: black;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 2px 5px;
  :hover {
    color: white;
    border: 2px solid black;
    background-color: black;
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
`;

const InfoBox = styled.div`
  width: 130px;
  text-align: center;
  padding: 5px;
  font-size: 1rem;
  div {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export default ResultCard;
