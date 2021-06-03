import React from "react";
import styled from "styled-components";
import EmptyImage from "../../assets/Image.svg";

// 서버에 date가 20200509 형식으로 저장되어있기 때문에, 이를 "5월 9일" 형태로 반환하는 함수입니다
const getDateFormat = (date: string) => {
  const dateNum = parseInt(date);
  const year = (dateNum % 10000) / 100;
  const day = dateNum % 100;
  return `${year}월 ${day}일`;
};

const CardWrap = styled.div``;

interface ICardProps {
  props: {
    date: string;
    title: string;
    image: string;
    weather: string;
    tags: string[];
  };
}

const Card = ({ props }: ICardProps) => {
  // 위에서 전달한 props를 받아옵니다
  const { date, title, image, weather, tags } = props; // 구조분해할당으로 각각 요소들을 분리해줍니다

  return (
    <CardWrap>
      <div className="card">
        <div className="card__image">
          {image ? ( // userData에 image가 있으면 image를 반환하고, 없으면 아이콘을 반환합니다
            <img className="card__image--photo" src={image} alt="" />
          ) : (
            <img className="card__image--empty" src={EmptyImage} alt="" />
          )}
        </div>
        <div className="card__top">
          {" "}
          {/* 날짜와 날씨를 보여줍니다*/}
          <div className="card__top--date">{getDateFormat(date)}</div>
          <div className="card__top--weather">{weather}</div>
        </div>
        <div className="card__title">{title}</div>
        <div className="card__tags">
          {tags.map((tag: string, index: number) => {
            // tag가 list 형식으로 저장되어있기 때문에 map을 사용합니다
            return (
              <div key={index} className="card__tags--tag">
                {" "}
                {/* key로 index를 사용합니다 */}
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </CardWrap>
  );
};

export default Card;
