import React from "react";
import Styled from "styled-components";
import Card from "../components/main/Card";
import NewCard from "../components/main/NewCard";
import { getUserData } from "../lib/api";
import { ICard, IRawData } from "../interface";
import { useRecoilValue } from "recoil";
import { dateState } from "../states/date";
import { withRouter, RouteComponentProps } from "react-router-dom";

function Main({ history }: RouteComponentProps) {
  const [userData, setUserData] = React.useState<ICard[] | null>(null);
  const [rawData, setRawData] = React.useState<IRawData | null>(null);
  const date = useRecoilValue(dateState);

  React.useEffect(() => {
    (async () => {
      const data = await getUserData();
      data && setRawData(data);
      data[date.year] && setUserData(data[date.year][date.month]);
    })();
  }, [date.year, date.month]);

  return (
    <MainWrap>
      {userData?.map((data, index) => {
        return (
          <Card key={index} props={data} onClickFunc={() => history.push(`/diary/${data.id}`)} />
        );
      })}
      <NewCard
        rawData={rawData!}
        year={date.year}
        month={date.month}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
}

export default withRouter(Main);

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;
