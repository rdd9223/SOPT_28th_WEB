import React, { useState } from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { dateState } from "../../states/date";
import { createCardData } from "../../lib/api";
import { ICard, IMatchParams, IRawData } from "../../interface";

interface ICardProps extends RouteComponentProps<IMatchParams> {
  data: ICard;
  rawData: IRawData;
}

function Card({ data, match, history, rawData }: ICardProps) {
  const id = parseInt(match.params.id);
  const isReadOnly = match.path === "/diary/:id";
  const { year, month } = useRecoilValue(dateState);
  const [state, setState] = useState(data);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleEdit = async () => {
    // const index = rawData[year][month].findIndex((data) => data.id === id);
    const newList = rawData[year].filter((data) => data);
    newList[month][id] = state;

    const data = await createCardData({ ...rawData, [year]: newList });

    history.goBack();
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
        handleEdit={handleEdit}
      />
      <CardInfo data={state} isReadOnly={isReadOnly} handleChange={handleChange} />
      <textarea
        name="text"
        placeholder="오늘을 기록해 주세요"
        readOnly={isReadOnly}
        value={state.text}
        onChange={handleChange}
      />
    </CardWrap>
  );
}

export default withRouter(Card);

const CardWrap = styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 642px;
    height: 219px;
    background-color: #efefef;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;
