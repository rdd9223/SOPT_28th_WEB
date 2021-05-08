import Main from "./pages/Main";
import Diary from "./pages/Diary";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calender";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import getUserData from "./lib/api";

const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  return { currentYear, currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().currentYear);
  const [month, setMonth] = useState(getCurrentDate().currentMonth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getUserData();
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar year={year} setYear={setYear} month={month} setMonth={setMonth} />
        <Title />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
