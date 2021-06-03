import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from "./components/common/Calender";
import Footer from "./components/common/Footer";
import MainHeader from "./components/common/MainHeader";
import Title from "./components/common/Title";
import Diary from "./pages/Diary";
import Main from "./pages/Main";

const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  return { currentYear, currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().currentYear);
  const [month, setMonth] = useState(getCurrentDate().currentMonth);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar year={year} setYear={setYear} month={month} setMonth={setMonth} />
        <Title />
        <Switch>
          {/* <Route
            exact
            path="/"
            component={() => {
              return <Main props={userData} />;
            }}
          /> */}
          <Route exact path="/" component={() => <Main year={year} month={month} />} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
