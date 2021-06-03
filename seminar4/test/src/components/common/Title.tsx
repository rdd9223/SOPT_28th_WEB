import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Styled from "styled-components";

const TitleWrap = Styled.div`
  .title {
    width: 1200px;
    height: 92px;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

// history 안에 location이 들어있다.
const Title = ({ location }: RouteComponentProps) => {
  const title = location.pathname === "/" ? "이번 달 일기" : "오늘의 일기";

  return (
    <TitleWrap>
      <div className="title">{title}</div>
    </TitleWrap>
  );
};

export default withRouter(Title);
