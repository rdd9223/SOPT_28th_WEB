import React from "react";
import styled from "styled-components";
import EmptyImage from "../../assets/Image.svg";
import { ICardProps } from "../../interfaces/card.interface";

// 서버에 date가 20200509 형식으로 저장되어있기 때문에, 이를 "5월 9일" 형태로 반환하는 함수입니다
const getDateFormat = (date: number) => {
  const month = parseInt(`${(date % 10000) / 100}`);
  const day = date % 100;
  return `${month}월 ${day}일`;
};

const CardWrap = styled.div`
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    &:hover {
      cursor: pointer;
    }

    &__image {
      width: 220px;
      height: 148px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;
      &--photo {
        width: inherit;
        height: inherit;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }
    &__top {
      margin: 9px 12px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &--weather {
        color: #cea0e3;
      }
    }
    &__title {
      font-size: 18px;
      height: 25px;
      margin: 0 12px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__tags {
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #cea0e3;
      &--tag {
        font-size: 14px;
        color: white;
        background-color: #cea0e3;
        padding: 4px 11px;
        border-radius: 5px;
        margin-right: 7px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

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
