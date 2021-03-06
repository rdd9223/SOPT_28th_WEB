import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Calendar from "./components/common/Calender";
import Footer from "./components/common/Footer";
import MainHeader from "./components/common/MainHeader";
import Title from "./components/common/Title";
import Diary from "./pages/Diary";
import Main from "./pages/Main";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainHeader />
        <Calendar />
        <Title />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/diary/:id" component={Diary} />
          <Route exact path="/diary/edit/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
