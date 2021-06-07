import React from "react";
import Styled from "styled-components";
import Card from "../components/main/Card";
import NewCard from "../components/main/NewCard";
import { getUserData } from "../lib/api";
import { IMainProps, ICard, IRawData } from "../interfaces/card.interface";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month }: IMainProps) => {
  const [userData, setUserData] = React.useState<ICard[] | null>(null);
  const [rawData, setRawData] = React.useState<IRawData | null>(null);

  React.useEffect(() => {
    (async () => {
      const data = await getUserData();
      data && setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      {userData?.map((data, index) => {
        return <Card key={index} props={data} />;
      })}
      <NewCard
        rawData={rawData!}
        year={year}
        month={month}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
};

export default Main;
