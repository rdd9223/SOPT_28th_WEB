const header = document.querySelector(".header");
const digitalTime = document.querySelector(".digital_time");
const digitalButton = document.querySelector(".digital_button");
const analogHour = document.querySelector(".analog_hour"); // 해당 클래스이름을 가진 요소를 가져옵니다
const analogMinute = document.querySelector(".analog_minute"); // 해당 클래스이름을 가진 요소를 가져옵니다
const analogSecond = document.querySelector(".analog_second"); // 해당 클래스이름을 가진 요소를 가져옵니다

let hour24 = false; // 24시간인지 12시간인지 저장하는 전역변수를 지정합니다

// 00 : 00의 형식을 맞추기 위해 한자리 수는 앞에 0을 채워주는 함수입니다
const fillZero = (num) => {
  num = num + ""; // 문자열로 변환
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthList[month];

  return { year, day, hour, minute, second, monthName };
};

const changeTime = () => {
  hour24 = !hour24;
};

const renderClock = () => {
  let { year, day, hour, minute, second, monthName } = getDate();

  if (!hour24) {
    if (hour >= 0 && hour < 12) {
      if (hour === 0) hour = 12;
      digitalButton.innerHTML = "AM";
    } else {
      if (hour >= 13) hour -= 12;
      digitalButton.innerHTML = "PM";
    }
  } else {
    digitalButton.innerHTML = "24H"; // 버튼 내부의 텍스트도 바꿉니다
  }

  // 시침의 각도를 계산합니다. 시침은 한 시간당 30도씩, 분당 0.5도씩 움직입니다
  // 90도를 더하는 이유는 바늘이 -90도로 누워있는 상태에서 시작하기 때문입니다 (css 참고)
  const hourDegree = (hour + minute / 60) * (360 / 12) + 90;
  const minuteDegree = (minute + second / 60) * (360 / 60) + 90;
  const secondDegree = second * (360 / 60) + 90;
  // css transform 속성 중 rotate를 다음과 같이 자바스크립트에서 사용할 수 있습니다
  analogHour.style.transform = `rotate(${hourDegree}deg)`;
  analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
  analogSecond.style.transform = `rotate(${secondDegree}deg)`;

  header.innerHTML = `Today is <span>${day} ${monthName}</span>,<span> ${year}</span>`;
  digitalTime.innerHTML = `${fillZero(hour)} : ${fillZero(minute)} : ${fillZero(second)}`;
};

const init = () => {
  renderClock();

  setInterval(renderClock, 1000); // 1초 간격으로 콜백함수를 실행합니다
  digitalButton.addEventListener("click", changeTime);
};

init();
