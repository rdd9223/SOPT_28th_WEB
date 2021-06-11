import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { getUserData } from "../lib/api";
import { useRecoilValue } from "recoil";
import { dateState } from "../states/date";
import { ICard, IMatchParams, IRawData } from "../interface";
import Card from "../components/diary/Card";

function Diary({ match }: RouteComponentProps<IMatchParams>) {
  const id = match.params.id;
  const [diaryData, setDiaryData] = useState<ICard | null>(null);
  // const [rawData, setRawData] = useState<IRawData>(null);
  const { year, month } = useRecoilValue(dateState);

  useEffect(() => {
    (async () => {
      const data = await getUserData();
      // data && setRawData(data)
      data[year] && setDiaryData(data[year][month].find((el: ICard) => el.id === parseInt(id)));
    })();
  }, [id]);

  return diaryData ? <Card data={diaryData} /*rawData={rawData}*/ /> : <div>404 Not Found</div>;
}

export default withRouter(Diary);
