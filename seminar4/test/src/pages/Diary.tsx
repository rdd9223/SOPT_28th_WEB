import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function Diary({ match }: RouteComponentProps) {
  console.log(match);
  return <div>Diarypage</div>;
}

export default withRouter(Diary);
