import React from "react";
import styled from "styled-components";
import EmptyImage from "../../assets/Image.svg";
import { ICardProps } from "../../interface";

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
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); // 컴포넌트에 Effects 항목을 누르면 된다. (in figma)
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

const Card = ({ props, onClickFunc }: ICardProps) => {
  const { date, title, image, weather, tags } = props;

  return (
    <CardWrap>
      <div className="card" onClick={onClickFunc}>
        <div className="card__image">
          {image ? (
            <img className="card__image--photo" src={image} alt="" />
          ) : (
            <img className="card__image--empty" src={EmptyImage} alt="" />
          )}
        </div>
        <div className="card__top">
          <div className="card__top--date">{getDateFormat(date)}</div>
          <div className="card__top--weather">{weather}</div>
        </div>
        <div className="card__title">{title || "제목 없음"}</div>
        <div className="card__tags">
          {tags.map((tag: string, index: number) => {
            return (
              <div key={index} className="card__tags--tag">
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
