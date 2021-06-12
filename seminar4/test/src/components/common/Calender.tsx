import React, { useRef } from "react";
import LeftOff from "../../assets/LeftOff.svg";
import LeftOn from "../../assets/LeftOn.svg";
import RightOff from "../../assets/RightOff.svg";
import RightOn from "../../assets/RightOn.svg";
import Styled from "styled-components";
import { useRecoilState } from "recoil";
import { dateState } from "../../states/date";
import { RouteComponentProps, withRouter } from "react-router-dom";

function Calendar({ location }: RouteComponentProps) {
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const leftButton = useRef<HTMLImageElement>(null);
  const rightButton = useRef<HTMLImageElement>(null);
  const [date, setDate] = useRecoilState(dateState);
  const isMain = location.pathname === "/";

  const addYear = () => isMain && setDate({ ...date, year: date.year + 1 });
  const subYear = () => isMain && setDate({ ...date, year: date.year - 1 });

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            className="calendar__year--left"
            src={LeftOff}
            alt=""
            onClick={subYear}
            onMouseEnter={() => leftButton.current && (leftButton.current.src = LeftOn)}
            onMouseLeave={() => leftButton.current && (leftButton.current.src = LeftOff)}
            ref={leftButton}
          />
          <div className="calendar__year--title">{date.year}년</div>
          <img
            className="calendar__year--right"
            src={RightOff}
            alt=""
            onClick={addYear}
            onMouseEnter={() => rightButton.current && (rightButton.current.src = RightOn)}
            onMouseLeave={() => rightButton.current && (rightButton.current.src = RightOff)}
            ref={rightButton}
          />
        </div>
        <div className="calendar__month">
          {monthList.map((item) => {
            return (
              <div
                key={item}
                className="calendar__month--button"
                onClick={() => setDate({ ...date, month: item })}
                style={item === date.month ? { fontSize: "22px", fontWeight: "bold" } : {}}
              >
                {item + 1}월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
}

export default withRouter(Calendar);

const CalendarWrap = Styled.div`
  .calendar {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      height: 61px;

      &--left:hover,
      &--right:hover {
        cursor: pointer;
      }

      &--title {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;

      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;
